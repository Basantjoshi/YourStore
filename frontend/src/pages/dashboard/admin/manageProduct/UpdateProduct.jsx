import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetchProductByIdQuery, useUpdateProductMutation } from '../../../../redux/features/products/productsApi';
import { useSelector } from 'react-redux';
import TextInput from '../addProduct/TextInput';
import SelectInput from '../addProduct/SelectInput';
import UploadImage from '../addProduct/UploadImage';

const categories = [
    { label: 'Select Category', value: '' },
    { label: 'Living Room', value: 'living room' },
    { label: 'Bedroom', value: 'bedroom' },
    { label: 'Dining Room', value: 'dining room' },
    { label: 'Office Furniture', value: 'office furniture' }
];



const UpdateProduct = () => {
    const {id} = useParams();
    const navigate =  useNavigate();
    const {user} = useSelector((state) => state.auth)
    const [product, setProduct] = useState({
        name: '',
        category: '',
       
        price: '',
        description: '',
        image: ''
    })

    const {data: productData, isLoading: isProductLoading, error: fetchError, refetch} = useFetchProductByIdQuery(id);

    const [newImage, setNewImage] = useState(null)

    const {name, category, description, image: imageURL, price } = productData?.product || {};

    const [updateProduct, {isLoading:isUpdating, error: updateError}] = useUpdateProductMutation();

    useEffect(()=> {
        if(productData){
            setProduct({
                name: name || '',
                category: category || '',
                price: price || '',
                description: description || '',
                image: imageURL || ''
            })
        }
    }, [productData])

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });


    };

    const handleImageChange= (image) => {
        setNewImage(image);
    }

    const handleSubmit =  async (e) => {
        e.preventDefault();

        const updatedProduct = {
            ...product,
            image: newImage ? newImage : product.image, 
            author: user?._id
        };

        try {
            await updateProduct({id: id, ...updatedProduct}).unwrap();
            alert('Product updated successfully');
            await refetch();
            navigate("/dashboard/manage-products")
        } catch (error) {
            console.error('Failed to update product:', error);
        }

    }

    if(isProductLoading) return <div>Loading....</div>
    if(fetchError) return <div>Error fetching product!...</div>
  return (
    <div className='container mx-auto mt-8'>
        <h2 className='text-2xl font-bold mb-6'>Update Product </h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
                <TextInput
                label="Product Name"
                name="name"
                placeholder=""
                value={product.name}
                onChange={handleChange}
                />
                <SelectInput
                    label="Category"
                    name="category"
                    value={product.category}
                    onChange={handleChange}
                    options={categories}
                />
                <TextInput
                    label="Price"
                    name="price"
                    type="number"
                    placeholder="50"
                    value={product.price}
                    onChange={handleChange}
                />

                 <UploadImage
                name="image"
                id="image"
                value={newImage || product.image}
                placeholder='Image'
                setImage={handleImageChange}
                />
                <div>
                <label htmlFor="description" className='block text-sm font-medium text-gray-700'>Description</label>
                <textarea name="description" id="description"
                className='add-product-InputCSS'
                value={product.description}
                placeholder='Write a product description'
                onChange={handleChange}
                ></textarea>
                </div>

                <div>
                    <button type='submit'
                    className='add-product-btn'
                   
                    >{isUpdating ? 'Updating...' : 'Update Product'}</button>
                </div>

        </form>
    </div>
  )
}

export default UpdateProduct