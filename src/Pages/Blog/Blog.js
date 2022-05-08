import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="bg-[url('/src/images/equipemnt-homepage-background.png')]">
                <h2 className='text-center py-8 text-lime-500 font-bold text-6xl font-rajdhani'>Frequently asked questions</h2>
                <div className='container mx-auto bg-white p-4 rounded-lg drop-shadow-xl mb-8'>
                    <h3 className='font-rajdhani text-3xl py-5'>Question: Difference between javascript and nodejs</h3>
                    <p className='font-sans text-2xl'><span className='font-bold'>Answer: </span> JavaScript is a High level programming language. It is running in any web browser. We can give a very stunning look on our website by JavaScript it's a mainly used for client-side activity although we can do backend work too. It is mostly used on the server-side. One of the big difference between JavaScript and nodejs is we cannot create HTML tags in Nodejs but we can create HTML tag in Javascript. We can do dynamic changes on the website without reloading the page just like an Application work. Node.js is an open-source, cross-platform, back-end JavaScript runtime environment. That means Node.js is free it can runs on various platforms (Windows, Mac OS, Linux). We can create generate dynamic page content like open, read, write, delete, and close files on the server or we can modify data in our databases too with Node.js.</p>
                </div>
                <div className='container mx-auto bg-white p-4 rounded-lg drop-shadow-xl'>
                    <h3 className='font-rajdhani text-3xl py-5'>Question: When should you use nodejs and when should you use mongodb?</h3>
                    <p className='font-sans text-2xl'><span className='font-bold'>Answer: </span> Node.js is especially suited for applications where we can maintain a persistent connection from the browser back to the server. We can sends updates to the user in real time but other framework like Ruby on Rails or Django would take lot more time to process the data it took some time but with Node.js the server has no mainting sepearate threads. When we don't need to maintain our data in table or row column fully structure format then we can use MongoDB. MongoDB is very popular for Dynamic schema, Scalability and speed. MongoDB stores data in JSON format. MongoDB's performance is much faster than any RDBMS (Relational Database Management System). We can use MongoDB on multiple servers. Relational DBMS incluedes data in a structured table format, using rows and columns and NoSQL DBMS like MongoDB is a non-relational database (NoSQL DBMS) that offers scalability, high performance, reliability, and flexibility. Node JS by default follows the Asynchronous pattern. MonggoDB or NoSQL database management systems are more faster and flexible and it holds collection and stores data as document that's why with Node.JS we can build a scalable web appilication.</p>
                </div>
                <div className='container mx-auto bg-white p-4 rounded-lg drop-shadow-xl'>
                    <h3 className='font-rajdhani text-3xl py-5'>Question: Differences between sql and nosql databases.</h3>
                    <p className='font-sans text-2xl'><span className='font-bold'>Answer: </span> The main difference between SQL databases and No SQL databases is SQL databases are relational, NoSQL databases are non-relational. SQL databases are table-based like row column and NoSQL is document based database. SQL databases use structured data and NoSQL databases use unstructured data. SQL databases are vertically scalable and NoSQL databases are horizontally scalable. SQL databases use multi-row. While NoSQL are like JSON unstructured. SQL databases follow ACID properties. ACID stand for Atomicity, Consistency, Isolation and Durability. NoSQL database follows the Brewers CAP (Consistency, Availability and Partition tolerance). SQL databases have fixed or static or predefined schema No SQL have dynamic schema.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;