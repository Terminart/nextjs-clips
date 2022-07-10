import { Button, Flex, VStack } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import Router from 'next/router'
import Link from 'next/link'
import * as React from 'react'
import { ReactNode } from 'react'
import { FormikConfig, FormikProps } from 'formik/dist/types'

type Props<T> = FormikConfig<T> & {
  children: (props: FormikProps<T>) => ReactNode
  back: string
  next: string
}

export const WizardForm = <T,>({
  initialValues,
  validationSchema,
  onSubmit,
  children,
  back,
  next,
}: Props<T>) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, formikHelpers) => {
        onSubmit(values, formikHelpers)
        await Router.push(next)
      }}
    >
      {(props: FormikProps<T>) => (
        <Form>
          <VStack
            align={'baseline'}
            spacing={16}
            px={4}
            py={{ base: 6, md: 8 }}
          >
            {children(props)}
            <Flex
              w={'full'}
              direction={{ base: 'column', sm: 'row' }}
              justify={'space-between'}
            >
              <Link href={back} passHref>
                <Button variant={'negative'}>Back</Button>
              </Link>
              <Button
                type={'submit'}
                isLoading={props.isSubmitting}
                disabled={!props.isValid}
                mt={{ base: 8, sm: 0 }}
              >
                Next
              </Button>
            </Flex>
          </VStack>
        </Form>
      )}
    </Formik>
  )
}
