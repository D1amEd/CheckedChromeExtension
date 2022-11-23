import smtplib

s = smtplib.SMTP('smtp.gmail.com',587)
msg='''Subject: Reyes es gay\n
Reyes es gay, verificado 100% por checked '''
s.starttls()
s.login("checkedextension@gmail.com","nfxqfxqhczjcocat")
emailid= "esteban.rico266@gmail.com"
s.sendmail('&&&&&&&&&&&', emailid, msg)