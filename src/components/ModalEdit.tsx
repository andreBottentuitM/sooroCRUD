import {
  Modal,
  Flex,
  FormLabel,
  ModalFooter,
  Input,
  Button,
  ModalOverlay,
  useDisclosure,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormHelperText,
  Box
} from "@chakra-ui/react";
import React from "react";
import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {REQUIRED_VALIDATION} from '../utils/utils'

export const ModalEdit = () => {

  
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const schema = yup.object().shape({
    fullName: yup.string().required(REQUIRED_VALIDATION("Nome")),
    email:yup.string().email().required(REQUIRED_VALIDATION("Email")),
    job:yup.string().required(REQUIRED_VALIDATION("Cargo")),
    salary:yup.number().positive().required(REQUIRED_VALIDATION("Salário"))
  })

  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={false}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent maxW="700px">
          <ModalHeader>Editar Colaborador</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel>Nome:</FormLabel>
              <Input isInvalid={errors.fullName ? true : false} placeholder="Nome" {...register("fullName")}/>
              {errors && errors.fullName && (
            <FormHelperText color="red">
              {errors.fullName.message && errors.fullName.message as string}
            </FormHelperText>
          )}
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email:</FormLabel>
              <Input isInvalid={errors.email ? true : false} placeholder="Email" {...register("email")}/>
              {errors && errors.email && (
            <FormHelperText color="red">
              {errors.email.message && errors.email.message as string}
            </FormHelperText>
          )}
            </FormControl>

            <Flex gap={5} mt={4}>
              <FormControl>
                <FormLabel>Cargo:</FormLabel>
                <Input isInvalid={errors.job ? true : false} placeholder="Cargo" {...register("job")}/>
                {errors && errors.job && (
            <FormHelperText color="red">
              {errors.job.message && errors.job.message as string}
            </FormHelperText>
          )}
      
              </FormControl>
              <FormControl>
                <FormLabel>Salário:</FormLabel>
                <Input  placeholder="Salário" {...register("salary")}/>
                {errors && errors.salary && (
            <FormHelperText color="red">
              {errors.salary.message && errors.salary.message as any}
            </FormHelperText>
          )}
              </FormControl>
            </Flex>
            <Box mt={10}>
            <Button type='submit' colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
            </Box>
              </form>
          </ModalBody>

          <ModalFooter>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
