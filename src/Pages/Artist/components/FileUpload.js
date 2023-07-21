import React, { useState } from "react";
import { Upload } from "antd";
import AntdImgCrop from "antd-img-crop";

export const FileUpload = ({ onChange }) => {
  const [fileList, setFileList] = useState([]);

  // const handleChange = ({ fileList: newFileList }) => {
  //   console.log({ newFileList });
  //   setFileList(newFileList);
  //   onChange(newFileList);

  //   return false;
  // };

  const beforeUpload = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      console.log({ file });
      setFileList([{ thumbUrl: reader.result, ...file }]);
    };

    reader.onerror = () => {};

    onChange([file]);

    return false;
  };

  console.log({ fileList });

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }

    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <AntdImgCrop
      grid
      onUploadFail={() => console.log("ppppp")}
      modalClassName="!text-black"
    >
      <Upload
        listType="picture-card"
        fileList={fileList}
        // onChange={handleChange}
        onPreview={onPreview}
        beforeUpload={beforeUpload}
      >
        {fileList.length < 1 && "+ Upload"}
      </Upload>
    </AntdImgCrop>
  );
};
