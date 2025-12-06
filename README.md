# 🎨 Sketchbook: The Magical Crayon App

This is a digital sketchbook application featuring a magical crayon that dynamically changes its color and opacity as you continue drawing, offering a unique and engaging artistic experience.

![cursor coloring a digital sketchbook](./sketch-vid.gif)

## 🛠️ Prerequisites

Before starting, ensure the target machine has the following installed:

- Node.js: The runtime environment required for npm and your Electron app.
- npm - Usually bundled with Node.js.

## 🚀 Getting Started

Follow these steps to set up and run the application.

**1. Install dependencies**

After cloning the project repository, navigate to the project directory in your terminal and install all required dependencies:

```
npm install
```

**2. Run the program**

Execute the application using npx electron .. By default, it runs with a 2x2 grid.

```
npx electron .
```

**3. Custom Grid Size**
You can specify a custom grid size by passing the `--grid=<number>`. The allowed grid size ranges from 2 to 100.

<div style="margin-left: auto; margin-right: auto;">

| Command                    | Grid    |
| -------------------------- | ------- |
| `npx electron . --grid=16` | `16x16` |
| `npx electron . --grid=32` | `32x32` |
| `npx electron . --grid=64` | `64x64` |

</div>

  <Center>Note: The larger the grid number, the higher the resolution of your canvas. </Center>

## ⌨️ Create a Custom Command (Optional)

To launch the app from any location on your computer by typing a simple command (e.g., sketch), follow these steps to create a custom shell script.

**1. Create the script file**

Create a new text file — we'll name it sketch for this example—and paste the following content into it.

```
#!/bin/bash

APP_DIR="/Users/yourusername/Desktop/sketchbook"
cd "$APP_DIR" || { echo "Error: Cannot navigate to application directory."; exit 1;}
npx electron . "$@"
```

**Important:** Replace `/Users/yourusername/Desktop/sketchbook` with the actual, absolute path to your sketchbook folder.

**2. Make the Script Executable**
Give the script permission to run as a program. Use the path to where you saved the `sketch` file:

```
chmod +x /path/to/sketch
```

**3. Install the Command**
Move the script to a directory included in your system's `$PATH` (like `/usr/local/bin/`) so it can be accessed system-wide. This step usually requires administrator privileges (`sudo`).

```
sudo mv /path/to/sketchbook /usr/local/bin/
```

**4. Use the Command**

```
sketch --grid=<number>


#Exaplme
sketch --grid==32
```
