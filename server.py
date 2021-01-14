#!/usr/bin/env python

'''
https://gist.github.com/faelp22/36c9bfca83780d3da73f07d66a7ec2ae
'''

import os
from http.server import HTTPServer, SimpleHTTPRequestHandler
from urllib.parse import urlparse


PORT = 8000
INDEXFILE = 'index.html'

class HandleRewrite(SimpleHTTPRequestHandler):

    def do_GET(self):

        # Parse query data to find out what was requested
        parsedParams = urlparse(self.path)

        # See if the file requested exists
        if os.access('.' + os.sep + parsedParams.path, os.R_OK):
            # File exists, serve it up
            SimpleHTTPRequestHandler.do_GET(self)

        # send index.html, but don't redirect
        self.send_response(200)
        self.send_header('Content-Type', 'text/html')
        self.end_headers()
        with open(INDEXFILE, 'rb') as fin:
            self.copyfile(fin, self.wfile)

def server():
    httpd = HTTPServer(("0.0.0.0", PORT), HandleRewrite)
    print("HTTP Server run at port", PORT)
    httpd.serve_forever()

def main():

    try:
        server()
    except OSError:
        print("\nError check if the PORT:[%s] address is already in use!\n" %PORT)
    except KeyboardInterrupt:
        print("\nServer down.\n")

if __name__ == "__main__":
    main()
