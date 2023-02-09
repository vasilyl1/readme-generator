# Professional README Generator Starter Code

When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions—this last part increases the likelihood that other developers will contribute to the success of the project.

Professional README Generator app can quickly and easily generate a README file by using a command-line application to generate one. This allows the project creator to devote more time working on the project.

## Description

This application runs from the command line. At first, it validates whether the README1.md file is already present in the current directory and if so terminates with the advice to use the -D key to overwrite the existing file. This simple check prevents the occasional overwriting of the existing file as it potentially could contain valuable effort which should not be lost.
Once the -D option is selected, the user is then being interviewed by asking questions, including multiple choice ones, and the captured input is then formatted and written into the README1.md file, the success message will display the path and the success of file creation.

## Installation

Step 1: clone GitHub repository, for that run the following command from the command line prompt (make sure you navigate to the directory of your choice before start cloning): git clone https://github.com/vasilyl1/readme-generator

Step 2: navigate to the cloned repositary directory, for that run: cd readme-generator

Step 3: install the libraries by running: NPM install

Step 4: launch the app by typing: node index.js 


## Usage

Once the app is launched, you will get the invitation to provide the data for your new readme file. The app will create README1.md file in the current directory.

Please note that once the app is launched again, it will terminate and will give the message to use -D key if the user wanted to overwrite the existing README1.md file. 

The user will have to either move the existing file from the current directory or use the -D key to overwrite that file.

Attached screenshot features on how the interview questions will look like and also allows to see the error diagnostic messages:

![Screenshot1](./img/screenshot1.png)

## Credits

Inquirer library has been used:
https://www.npmjs.com/package/inquirer/v/8.2.4

## License

MIT License

Copyright (c) 2022 vasilyl1

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.