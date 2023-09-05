import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomSelect from "../../components/CustomSelect";
import NutritionTable from '../../components/NutritionTable'
export default function CreateNewProduct() {
  const [productName, setProductName] = useState("");
  const [typeOfProduct, setTypeOfProduct] = useState("");
  return (
    <div>
      <h1 className="font-bold text-4xl mb-10 mt-10">Add New Product</h1>
      <div>
      <CustomInput
      placeholder={"Product Name"}
      type={"text"}
      setState={setProductName}
      />
      <CustomSelect
      label={"Type of Product"}
      options={["Drink","Food"]}
      setState={setTypeOfProduct}
      theChoose={typeOfProduct}
      />
      </div>
      <hr />
      <div className="p-4">
        <h1 className="font-bold text-2xl">Nutrition Facts</h1>
        <div>
         <NutritionTable typeOfProduct={typeOfProduct}/>
        </div>
      </div>
    </div>
  );
}
