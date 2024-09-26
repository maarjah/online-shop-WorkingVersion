import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import './form-input.css';
import { ShopContext } from '../providers/shop-context';

//logic for submitting form input
//using Context API and hooks
//for sending emails EmailJS was set up
function FormInputProvider() {
    const { getTotalCartAmount, getItemsInCartList, setCartItems } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    let itemList = getItemsInCartList();

    //initializing the EmailJS SDK when the component mounts
    useEffect(() => emailjs.init('PfSyYQGyT_66YC4ja')); 
    const [loading, setLoading] = useState(false);
    //variables for form processing
   const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    //Order button functionality
   const onSubmit = async (customer) => {
        //variables for input fields
        let name = customer.name;
        let email = customer.email;
        let phone = customer.phone;
        //ordered products and amount
        const message = itemList + " Total amount: EUR " + totalAmount.toFixed(2);
        //Email Server service ID and email templates
        const serviceId = "service_qtqvkfc";
        const templateIdClient = "template_kp8rsvc";
        const templateIdShop = "template_kfzv7nk";
        
        try {
        setLoading(true);
        //sending order confirmation to the customer
        await emailjs.send(serviceId, templateIdClient, {
            name: name,
            recipient: email,
            message: message,
        });
        //sending new order notification to the shop owner
        await emailjs.send(serviceId, templateIdShop, {
            name: name,
            email: email,
            phone: phone,
            message: message,
        });
        //displaying alert upon successful order completion
        alert("We have received your order. Thank you!");
        //handle errors
        } catch (error) {
        console.log(error);
        } finally {
        setLoading(false);
        }
        //displaying empty cart after an order has been submitted
        itemList = [];
        setCartItems(itemList);
    };
    //Customer details form
    //Regex input field validation for each input field
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Full name: </label>
            <input
                id="name"
                type="text"
                placeholder="Full name"
                {...register("name", { required: true, pattern: /^(\w\w+)\s(\w+)$/i })}
                />
            <div>
                {errors.name && <span style={{color: "red"}}>Please enter your full name</span>}
            </div>
                <label htmlFor="email">Email: </label>
                <input
                    id="email"
                    type="text"
                    placeholder="Email"
                    {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
                />
                <div>
                     {errors.email && <span style={{display: "block", color: "red"}}>Invalid email</span>} 
                </div>
                <label htmlFor="phone">Phone: </label>
                <input
                    id="phone"
                    type="tel"
                    placeholder="Phone"
                    {...register("phone", { required: true, pattern: /^[0-9]{5,13}$/i })}
                />
                <div>
                    {errors.phone && <span style={{color: "red"}}>Invalid phone number</span>}  
                </div>
                <div className="orderBtnDiv">
                      <input id="orderBtn" type="submit" value="Order" disabled={loading}/>
                </div>
        </form>
      );
}

export default FormInputProvider;