import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {
    Container,
    Row,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Alert,
} from "reactstrap";

function EditProductForm({id}) {
   
    const initProductState = {
        name: "",
        category: "",
        price: "",
        tags: [],
    };
    const [product, setProduct] = useState(initProductState);
    const [submitted, setSubmitted] = useState(false);
    useEffect(()=>{
        axios.get("http://localhost:5000/api/products/"+id).then((response) => {
            setProduct(response.data);
        });
    }, [id]);


    const handleInputChange = (event) => {
        let { name, value } = event.target;  //มันจะแมตอัตโนมัติ กับ name
        if(name === "tags"){
            value = value.split(",");
        }
        setProduct({...product, [name]: value });
    };
    const saveProduct = () => {
        const param = {
            name: product.name,
            category: product.category,
            price: product.price,
            tags: product.tags,
        };

        //call API
        axios.put("http://localhost:5000/api/products/"+product._id, param).then((response)=>{
                console.log(response.data);
                setProduct({...product, param});
                setSubmitted(true);
            })
        .catch((error)=>{
                console.log(error);
            });
    };
    
    const newProduct = () =>{
        setSubmitted(false);
    };
    return (
        <Container>
            <Row><h3>Update Product Information</h3></Row>

            {submitted ? (
                <>
                <Alert color='success'>
                    You have updated successfully !!
                    </Alert>
                    <Button className='btn btn-success' onClick={newProduct}>OK</Button>
                    </>
            ):(<>
            <Form>

            <FormGroup>
                <Label for="productName">Product Name</Label>
                <Input type='text' name="name" id="productName"
                    value={product.name || ""}
                    onChange={handleInputChange} placeholder='Enter product name'>
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for="productCategory">Product Category</Label>
                <Input type='text' name="category" id="productCategory"
                    value={product.category || ""}
                    onChange={handleInputChange} placeholder='Enter product category'>
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for="productPrice">Product Price</Label>
                <Input type='text' name="price" id="productPrice"
                    value={product.price || ""}
                    onChange={handleInputChange} placeholder='Enter product price'>
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for="productTags">Product Tags</Label>
                <Input type='text' name="tags" id="productTags"
                    value={product.tags || ""}
                    onChange={handleInputChange} placeholder='Enter product tags'>
                </Input>
            </FormGroup>

            <Button className='btn btn-success' onClick={saveProduct} >Update product</Button>

        </Form>
            </>)}
            
        </Container>
    )
}

export default EditProductForm;
