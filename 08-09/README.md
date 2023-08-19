# ECommerce

This project is a part of the ITI summer training Labs.

## Lab 8

- Change the root component selector to: myfirstapp-root in the @componenet decorator function and change the selector directive in index.html.
- What’s Decorator function?
  **Answer**:
  In Angular, a decorator function is denoted by an @ symbol before its name and is used to add metadata or modify behavior to classes, methods, properties, or parameters. They are essential for defining components, directives, services, enabling dependency injection, data binding, and more.
- why we need @component() function in the component.ts file?
  **Answer**:
  - Metadata Definition: The @Component decorator is used to define metadata for the component.
  - Component Configuration: The decorator provides a declarative way to configure the component
  - Dependency Injection: The @Component decorator plays a role in the Dependency Injection (DI) system of Angular.
  - Encapsulation: The decorator allows you to encapsulate the component logic, template, and styles together in a single file, making it more organized and modular.
  - Reusability: By using the @Component decorator, you can create reusable components that can be easily included in various parts of your application.
- Try running the project in different port number than the default port number (port 4500 for example).
- Change the favicon of the project.

- Create the following components:

  - App Component (Root Component)
    - Header
      - Bootstrap responsive navbar.
      - [Photo banner](https://previews.123rf.com/images/arrow/arrow1508/arrow150800011/43834601-online-shopping-e-commerce-flat-design-concept-banner-background.jpg)
    - Products
    - Footer
    - SideMenu
      - Add new component besides the Product component (With any dummy content or image).

- Review the app.module, and see how the components you created were added in imports and in declaration in @ngmodule decorator function.

## Lab 9

Complete remaining assignments from previous lab [(Lab8)](#lab-8).

- Complete the following in the Products component
  - When type a category to textbox, display the products of this category [Use 2-way binding with the dropdown list].
  - Hide the products with Quantity =0
  - Add buy button with each product, which will decrease the available quantity of the product by 1 each time it clicked(bouns)

![alt](./Lab9.png)

## Project Structure

- Products

  - Components:
    - All products
    - Products Details
  - Services:
    - product.service

- Carts

  - Components:
    - Cart
  - Services:
    - Cart.service

- Shared
  - Components:
    - Header
      - navbar
      - Photo banner
    - Footer
