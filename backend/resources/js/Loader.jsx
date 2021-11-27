import React, { useState } from "react";
import {
  Input,
  Image as CImage,
  Box,
  Text,
  HStack,
  Button,
  Flex,
} from "@chakra-ui/react"
import uploadLogo from "./upload.svg"
import imageAlt from "./bx-image-alt.svg"
import deleteIcon from "./bx-x.svg"

const Loader = () => {
  const [dragOver, setDragOver] = useState(false);
  const [fileList, setFileList] = useState([]);

  const onChangeFileInput = ((e) => {
    const images = e.target.files;
    const files = Array.from(images);
    let newFiles = [];
  
    files.map((file,index) => {
      const fileReader = new FileReader();

      fileReader.onload = (e) => {
        newFiles.push(e.target.result);
        if (index == files.length - 1) {
          setFileList(fileList.concat(newFiles));
        }
      };
      fileReader.readAsDataURL(file);  
    });
  });

  const fileListField = fileList.map((item,index) => {
    let id = index + item;

    return (
    <figure id={'figure-' + id} key={id}>
      <CImage
        id={'img-' + id}
        src={item}
        boxSize="200px"
        objectFit="contain"
      />
      <Button
        id={'del-' + id}
        colorScheme="red"
        onClick={() => {
          document.getElementById("figure-" + id).remove();
        }}
      >
        Remove
      </Button>
    </figure>
    )
  });

  return (
    <>
      <Box
        border={dragOver ? '2px solid #16a5bf' : '2px dashed #494949'}
        h='40vh'
        w='75%'
        my='5em'
        mx='auto'
        background={dragOver ? 'teal.300' : 'gray.50'}
        position='relative'
        id='dropArea'
        onDragOver={() => setDragOver(true)}
        onDragLeave={() => setDragOver(false)}
        onDrop={() => setDragOver(false)}
        transition='all 0.25s cubic-bezier(0.21, 0.51, 0.51, 1)'
      >
        <Flex
          direction='column'
          justifyContent='center'
          align='center'
        >
          <CImage
            boxSize="300px"
            src={uploadLogo}
            alt="Upload" />
          <Text fontSize="3xl" color="gray.600">Drag and drop a file or click</Text>
        </Flex>
        <Input
          type="file"
          multiple
          name='images[]'
          onChange={onChangeFileInput}
          position='absolute'
          top='0'
          left='0'
          opacity='0'
          width='100%'
          height='100%'
        />
      </Box>
      {/* <HStack justify='space-evenly'>
        <Box position='relative' w='200px'>
          <CImage
            id="thumbnail"
            boxSize="200px"
            objectFit="contain"
          />
          <Box
            id="deleteBtn"
            backgroundImage={deleteIcon}
            position='absolute'
            bottom='0'
            left='29%'
            opacity='0.8'
            width='10%'
            height='10%'
          >
            <Button
              colorScheme="red"
              onClick = {x => {
                  document.getElementById('thumbnail').setAttribute('src', imageAlt);
                }
              }
            >
              Remove
            </Button>
          </Box>
        </Box>
      </HStack> */}
      <HStack
        id='previewField'
        justify='space-evenly'
      >
        {fileListField}
      </HStack>
    </>
  );
};

export default Loader;
