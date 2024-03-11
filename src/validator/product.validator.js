import { acceptAlpha } from "../regex";
const allowedImagesType = ['jpg', 'png', 'jpeg', 'svg']

export const validateAddProductOnChange = (name, value, preserveError) => {
   let errors = { ...preserveError };
   switch (name) {
      case "name":
         if (!value) {
            errors.nameError = "This field is required";
         } else if (!acceptAlpha.test(value)) {
            errors.nameError = "only alphabets are allowed";
         } else {
            delete errors.nameError
         }
         break;
      case "description":
         if (!value) {
            errors.descriptionError = "This field is required";
         } else if (!acceptAlpha.test(value)) {
            errors.descriptionError = "only alphabets are allowed";
         } else {
            delete errors.descriptionError
         }
         break;
      case "frontImage":
         if (!value) {
            errors.frontImageError = "This field is required";
         } else {
            const fileType = value?.name.slice(value?.name.lastIndexOf(".") + 1, value?.name?.length)
            const isValidImage = allowedImagesType?.includes(fileType)
            if (!isValidImage) {
               errors.frontImageError = "You can only upload JPEG/JPG/PNG/SVG file!";
            } else {
               delete errors.frontImageError
            }
         }
         break;
      case "backImage":
         if (!value) {
            errors.backImageError = "This field is required";
         } else {
            const fileType = value?.name.slice(value?.name.lastIndexOf(".") + 1, value?.name?.length)
            const isValidImage = allowedImagesType?.includes(fileType)
            if (!isValidImage) {
               errors.backImageError = "You can only upload JPEG/JPG/PNG/SVG file!";
            } else {
               delete errors.backImageError
            }
         }
         break;
      default:
         break;
   }

   return errors;
};

export const validateAddProduct = (productData = {}) => {
   const {
      name,
      description,
      frontImage,
      backImage,
   } = productData

   const errors = {}

   if (!name) {
      errors.nameError = "This field is required";
   } else if (!acceptAlpha.test(name)) {
      errors.nameError = "only alphabets are allowed";
   }

   if (!description) {
      errors.descriptionError = "This field is required";
   } else if (!acceptAlpha.test(description)) {
      errors.descriptionError = "only alphabets are allowed";
   }

   if (!frontImage) {
      errors.frontImageError = "This field is required";
   } else {
      const fileType = frontImage?.name.slice(frontImage?.name.lastIndexOf(".") + 1, frontImage?.name?.length)
      const isValidImage = allowedImagesType?.includes(fileType)
      if (!isValidImage) {
         errors.frontImageError = "You can only upload JPEG/JPG/PNG/SVG file!";
      }
   }

   if (!backImage) {
      errors.backImageError = "This field is required";
   } else {
      const fileType = backImage?.name.slice(backImage?.name.lastIndexOf(".") + 1, backImage?.name?.length)
      const isValidImage = allowedImagesType?.includes(fileType)
      if (!isValidImage) {
         errors.backImageError = "You can only upload JPEG/JPG/PNG/SVG file!";
      }
   }

   return errors
}

export const validateAddProductColorOnChange = (name, value, preserveError, otherData = {}) => {
   let errors = { ...preserveError };
   switch (name) {
      case "name":
         if (!value) {
            errors.nameError = "This field is required";
         } else if (!acceptAlpha.test(value)) {
            errors.nameError = "only alphabets are allowed";
         } else {
            delete errors.nameError
         }
         break;
      case "colorCode":
         if (!value) {
            errors.colorCodeError = "This field is required";
         } else {
            delete errors.colorCodeError
         }
         break;
      default:
         break;
   }

   return errors;
};

export const validateAddProductColor = (productData = {}) => {
   const {
      name,
      colorCode
   } = productData

   const errors = {}

   if (!name) {
      errors.nameError = "This field is required";
   } else if (!acceptAlpha.test(name)) {
      errors.nameError = "only alphabets are allowed";
   }

   if (!colorCode) {
      errors.colorCodeError = "This field is required";
   }

   return errors
}