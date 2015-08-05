# Write a program to decode this message:
# FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH.
# This is a form of cryptography known as the Caesar Ciper. It has a shift parameter of 3.
# The alphabet is normally:
# ABCDEFGHIJKLMNOPQRSTUVWXYZ
# The alphabet with the shift parameter of 3 is now as follows:
# DEFGHIJKLMNOPQRSTUVWXYZABC

decode = "FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH."

alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
caesar = "DEFGHIJKLMNOPQRSTUVWXYZABC"

decode.tr('DEFGHIJKLMNOPQRSTUVWXYZABC', 'A-Z')

# decode.tr(caesar, aplha)

class CaesarCiper
  def initialize(:)