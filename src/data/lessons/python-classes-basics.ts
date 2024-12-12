

import { Lesson } from '@/types/lesson';

const PythonClassesBasic: Lesson = {
    "id": "python-classes-basics",
    "title": "Understanding Python Classes: A Car Adventure!",
    "description": "Learn how to create and use Python classes by thinking about cars and their features.",
    "tags": ["python", "classes", "objects", "beginners"],
    "estimatedTime": "medium",
    "sections": [
      {
        "type": "content",
        "content": [
          {
            "type": "text",
            "content": "Imagine you're organizing your bedroom. You probably have different types of things: toys, books, clothes, and maybe some games. Each type of thing has its own special features and things it can do:\n\n- Books have pages, authors, and you can read them\n- Games have players, rules, and you can play them\n- Clothes have sizes, colors, and you can wear them\n\nIn Python, we use something called 'classes' to organize and create things in a similar way. A class is like a special template or recipe that tells Python what features something should have and what it can do.\n\nThink of a class like a cookie cutter. Just like how a star-shaped cookie cutter makes star cookies, a Car class makes car objects. And just like how each cookie can have different frosting or sprinkles, each car object can have different colors or speeds!"
          }
        ]
      },
      {
        "type": "content",
        "content": [
          {
            "type": "text",
            "content": "Here's another way to think about it:\n\nImagine you're playing with LEGOs. When you get a new LEGO set, it comes with:\n1. Instructions (like a class) that tell you how to build something\n2. Different pieces (like attributes) that make up your creation\n3. Ways to play with it (like methods) once it's built\n\nIn Python:\n- The class is your instruction manual\n- The attributes are the pieces that make up your creation\n- The methods are the ways you can play with what you built\n\nLet's see this in action with something fun - cars!"
          }
        ]
      },
      {
        "type": "question",
        "question": {
          "type": "multiple-choice",
          "question": "Which of these is the best way to think about a Python class?",
          "options": [
            "It's like a box that holds stuff",
            "It's like a recipe that tells you how to make something",
            "It's like a number that does math",
            "It's like a word that tells a story"
          ],
          "correctAnswer": "B",
          "explanation": "A class is like a recipe because it gives you instructions for creating something new. Just like how a cookie recipe tells you what ingredients you need and what steps to follow, a class tells Python what features (attributes) an object should have and what it can do (methods).",
          "hint": "Think about what helps you create something new by following specific instructions"
        }
      },
      {
        "type": "content",
        "content": [
          {
            "type": "text",
            "content": "Now, let's create our Car class! Remember:\n- Attributes are like the features of our car (what it has)\n- Methods are like the actions our car can do (what it can do)\n\n```python\nclass Car:\n    def __init__(self, color, max_speed):\n        # These are our car's attributes (what it has)\n        self.color = color          # Like the paint job\n        self.speed = 0              # Starting speed is 0\n        self.max_speed = max_speed  # Top speed it can reach\n        self.is_engine_on = False   # Car starts with engine off\n    \n    # These are our car's methods (what it can do)\n    def start_engine(self):\n        self.is_engine_on = True\n        return 'Vroom! Engine is running!'\n    \n    def honk(self):\n        return 'Beep beep!'\n    \n    def step_on_gas(self):\n        if not self.is_engine_on:\n            return 'Need to start the engine first!'\n        if self.speed < self.max_speed:\n            self.speed += 10\n        return f'Vrooom! Now going {self.speed} mph'\n    \n    def brake(self):\n        if self.speed > 0:\n            self.speed -= 10\n        return f'Slowing down to {self.speed} mph'\n```"
          }
        ]
      },
      {
        "type": "content",
        "content": [
          {
            "type": "text",
            "content": "Let's create some cars and play with them!\n\n```python\n# Create two different cars (like getting two toys from the same factory)\nfast_car = Car('red', 200)    # A red race car that can go up to 200 mph\ncool_car = Car('blue', 150)   # A blue car that can go up to 150 mph\n\n# Let's play with our cars!\nprint(fast_car.start_engine())    # Vroom! Engine is running!\nprint(fast_car.step_on_gas())    # Vrooom! Now going 10 mph\nprint(fast_car.honk())           # Beep beep!\n\n# The cool_car is different - it hasn't started its engine yet\nprint(cool_car.step_on_gas())    # Need to start the engine first!\n```\n\nSee how each car is separate? They're made from the same template (class), but they can do their own things independently - just like real cars!"
          }
        ]
      },
      {
        "type": "question",
        "question": {
          "type": "multiple-choice",
          "question": "Looking at our Car class, what would happen if we tried to make a car go faster than its max_speed?",
          "options": [
            "The car would break down",
            "The car would ignore its max_speed and go faster",
            "The car would stay at its max_speed",
            "The program would show an error message"
          ],
          "correctAnswer": "C",
          "explanation": "Just like a real car can't go faster than it was built to go, our Car class checks if the speed is less than max_speed before speeding up. If it's already at max_speed, it stays at that speed. This is how we make our program follow real-world rules!",
          "hint": "Look at the if statement in step_on_gas() - what does it check before increasing speed?"
        }
      },
      {
        "type": "content",
        "content": [
          {
            "type": "text",
            "content": "Now it's your turn to experiment! Here are some fun things you can try:\n\n1. Create your dream car with your favorite color and speed\n2. Make it perform different actions (start_engine, honk, step_on_gas, brake)\n3. Try to add new features to the Car class, like:\n   - A fuel_tank attribute that goes down when you drive\n   - A turn() method that lets the car turn left or right\n   - A radio that can be turned on and off\n\nRemember:\n- A class is like a factory that makes things\n- Attributes are what your object has (like color, speed)\n- Methods are what your object can do (like honk, drive)\n- Each object you create is separate and special!\n\nClasses help us organize our code like we organize things in real life. They're a way to create and control things in our programs, just like how we create and control things when we play with toys or build with LEGOs!"
          }
        ]
      },
      {
        "type": "question",
        "question": {
          "type": "multiple-choice",
          "question": "If you wanted to add a radio to our Car class, which would be the best way to do it?",
          "options": [
            "Just add radio = True at the end of the program",
            "Add self.is_radio_on = False in __init__ and create turn_radio_on() and turn_radio_off() methods",
            "Write radio = False outside the class",
            "Add a radio variable inside each method"
          ],
          "correctAnswer": "B",
          "explanation": "Adding self.is_radio_on in __init__ means every new car will have a radio that starts turned off. Creating methods to turn it on and off gives each car the ability to control its own radio. This is like how each real car has its own radio controls!",
          "hint": "Think about how we handled the engine - each car needs its own radio that can be controlled"
        }
      }
    ]
  }

export default PythonClassesBasic;