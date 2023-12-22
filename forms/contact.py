import cgi
import smtplib, ssl
from email.mime.text import MIMEText
from email.message import EmailMessage



form = cgi.FieldStorage()
name = form.getvalue('name')
email = form.getvalue('email')
subject = form.getvalue('subject')
message = form.getvalue('message')
SMTP_EMAIL = form.getvalue('smtp_email') 
SMTP_PASSWORD = form.getvalue('smtp_password') 

email_address=SMTP_EMAIL
email_password=SMTP_PASSWORD
port = 465  # This is the default SSL port

# create email
msg = EmailMessage()
msg["Subject"] = f"{name} - {subject}"
msg["From"] = email_address
msg["To"] = email
msg.set_content(message)

# send email
context = ssl.create_default_context()
with smtplib.SMTP_SSL("smtp.gmail.com", port, context=context) as server:
    server.login(email_address, email_password)
    server.send_message(msg)