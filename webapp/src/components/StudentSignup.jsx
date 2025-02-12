import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

const StudentSignup = () => { 
    return (
        <Form>
        <Form.Group
            className="row g-3 mb-3 my-auto align-items-center justify-content-center"
            controlId="formFirstName"
        >
            <Form.Group className="col-xl-1">
                <Form.Label>First Name</Form.Label>
            </Form.Group>
            <Form.Group className="col-xl-3">
                <Form.Control
                    type="firstName"
                    placeholder="Enter first name"
                />
            </Form.Group>
        </Form.Group>

        <Form.Group
            className="row g-3 mb-3 align-items-center justify-content-center"
            controlId="formLastName"
        >
            <Form.Group className="col-xl-1">
                <Form.Label>Last Name</Form.Label>
            </Form.Group>
            <Form.Group className="col-xl-3">
                <Form.Control
                    type="lastName"
                    placeholder="Enter last name"
                />
            </Form.Group>
        </Form.Group>

        <Form.Group
            className="row g-3 mb-3 align-items-center justify-content-center"
            controlId="formBasicEmail"
        >
            <Form.Group className="col-xl-1">
                <Form.Label>Email Address</Form.Label>
            </Form.Group>
            <Form.Group className="col-xl-3">
                <Form.Control
                    type="email"
                    placeholder="Enter email address"
                />
            </Form.Group>
        </Form.Group>

        <Form.Group
            className="row g-3 mb-3 align-items-center justify-content-center"
            controlId="formBasicPassword"
        >
            <Form.Group className="col-xl-1">
                <Form.Label>Password</Form.Label>
            </Form.Group>
            <Form.Group className="col-xl-3">
                <Form.Control
                    type="password"
                    placeholder="Enter password"
                />
            </Form.Group>
        </Form.Group>

        <Form.Group className="text-center">
            <Button
                variant="primary"
                type="submit"
                href="/StudentDetails"
            >
                Signup
            </Button>{" "}
        </Form.Group>
    </Form>
    );
   };
export default StudentSignup;
