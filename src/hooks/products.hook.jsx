import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductDataRequest, CreateProductRequest, DeleteProductRequest } from '../containers/pages/productPage/actions/product';
import { validateAddProduct, validateAddProductOnChange } from "../validator";

export const useProductsHook = () => {
   const productData = useSelector((state) => state.product.product.products)
   const loading = useSelector((state) => state.product.loading)
   const imageUrl = useSelector((state) => state.product.product.imageUrl)

   const [formDatas, setFormData] = useState({
      name: "",
      description: ""
   });
   const [imageData, setImageData] = useState({
      frontImage: null,
      backImage: null,
   });
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(ProductDataRequest())
   }, [])

   const showModal = () => {
      setIsModalOpen(true);
   };

   const handleSubmit = () => {
      const errors = validateAddProduct({ ...formDatas, ...imageData })
      setErrorMessages(errors)
      if (Object.keys(errors).length > 0) {
         return
      }

      const formData = new FormData()
      formData.append("name", formDatas?.name || "")
      formData.append("description", formDatas?.description || "")
      formData.append("frontImage", imageData?.frontImage)
      formData.append("backImage", imageData?.backImage)
      dispatch(CreateProductRequest(formData))

      handleCancel()
   };

   const handleDelete = (id) => {
      dispatch(DeleteProductRequest(id))
   }

   const handleCancel = () => {
      setIsModalOpen(false);
      setErrorMessages({})
      setImageData({})
      setFormData({ name: "", description: "" })
   };

   const onInput = (event) => {
      const { target: { name, value } } = event

      const errors = validateAddProductOnChange(name, value, errorMessages)
      setErrorMessages(errors)

      setFormData({
         ...formDatas, [name]: value,
      })
   }
   const handlChangeImage = (e, name = "frontImage") => {
      const fileData = e.target.files[0];

      const errors = validateAddProductOnChange(name, fileData, errorMessages)
      setErrorMessages(errors)

      setImageData({
         ...imageData,
         [name]: fileData
      });
   }

   const checkIsPNGorJPGImage = (fileData) => {
      const allowedImagesType = ['jpg', 'png', 'jpeg']

      const fileType = fileData?.name.slice(fileData?.name.lastIndexOf(".") + 1, fileData?.name?.length)
      return allowedImagesType?.includes(fileType)
   }

   return {
      productData,
      loading,
      imageUrl,
      isModalOpen,
      formDatas,
      imageData,
      errorMessages,
      checkIsPNGorJPGImage,
      showModal,
      handleSubmit,
      handleDelete,
      handleCancel,
      onInput,
      handlChangeImage
   }
}