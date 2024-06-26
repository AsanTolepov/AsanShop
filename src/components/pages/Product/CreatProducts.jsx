import React, { useEffect, useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, useToast, Textarea } from "@chakra-ui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Select, Space } from "antd";
import getCategories from "../../../fetch/getCategories";
const CreatProducts = () => {
    const {categories} = useSelector(state => state.categories)
    const dispatch = useDispatch()
    const toast = useToast()
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [price, setPrice] = useState("")
    const [categoryId, setSelectId] = useState("")
    const [description, setDescription] = useState("")
    async function creatProducts(e){
            getCategories(dispatch)
            e.preventDefault()
            let data = {
                title,
                image,
                price,
                description,
                categoryId
            }
            await axios.post("https://datab-3.onrender.com/products", data)
            .then((data) => {
            toast({
                title: 'Product created.',
                description: "Success",
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'top-right',
            })
            })
            .catch((err) => {
              toast({
                  title: 'error',
                  description: "error",
                  status: 'error',
                  duration: 9000,
                  isClosable: true,
                  position: 'top-right',
                })
            })
            setTitle("")
            setImage("")
            setPrice("")
            setSelectId("")
            setDescription("")
      }
      
      useEffect(() =>{
      getCategories(dispatch)
      } ,[])
  return (
    <>
        <Box width={'90%'} marginX={'auto'}>
                <form onSubmit={(e) => creatProducts(e)}>
                    <Box display={'grid'} gridTemplateColumns={"repeat(auto-fit, minmax(250px, 1fr))"} alignItems={'flex-end'} gap={'20px'}>
                      <FormControl marginTop={'20px'}>
                          <FormLabel>Enter product name</FormLabel>
                          <Input border={'1px solid dodgerblue'}
                                required
                              value={title} onChange={(e) =>setTitle(e.target.value) }
                              background={'#fff'} type="text" placeholder="categories name" />
                      </FormControl>
                      <FormControl marginTop={'20px'}>
                          <FormLabel>Enter product image</FormLabel>
                          <Input border={'1px solid dodgerblue'}
                                required
                              value={image} onChange={(e) => setImage(e.target.value)} 
                              background={'#fff'} type="url" placeholder="categories image" />
                      </FormControl>
                      <FormControl>
                        <FormLabel>
                          Enter product price
                        </FormLabel>
                        <Input border={'1px solid dodgerblue'}
                              required 
                              value={price} onChange={(e) => setPrice(e.target.value)}
                              background={'#fff'} type="number" placeholder="Enter price"/>
                      </FormControl>
                      <FormControl>
                        <FormLabel>
                          Enter your product description
                        </FormLabel>
                        <Textarea border={'1px solid dodgerblue'}
                              required
                              value={description} onChange={(e) => setDescription(e.target.value)} 
                              background={'#fff'} resize={"none"} placeholder="Enter description"/>
                      </FormControl>
                      <FormControl>
                        <Box>
                          Enter product categories
                        </Box>
                        {/* <Select required background={'#fff'} onChange={(e) => {
                          setSelectId(e.target.value)
                          console.log(e.target.value)
                        } } value={categoryId}>
                          {
                              categories.map((element) => (
                                <option key={element.id} value={element.id}>{element.title}</option>
                              ))
                          }
                        </Select> */}
                        <Space wrap>
                          <Select
                            defaultValue=""
                            style={{
                              width: 120,
                            }}
                            onChange={setSelectId}
                            options={[
                              ...categories.map((element) => (
                                {
                                  value: element.id,
                                  label: element.title,
                                }
                                ))
                              ]}
                          />
                        </Space>
                      </FormControl>
                      <FormControl>
                          <Button marginTop={'20px'} _hover={{background:'dodgerblue'}} _active={{opacity:'0.5'}} 
                                    background={'dodgerblue'} textColor={'#fff'} type="submit" size={'lg'}>SEND</Button>
                      </FormControl>
                    </Box>
                </form>
            </Box>
    </>
  )
}

export default CreatProducts