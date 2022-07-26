import { Box } from '@chakra-ui/react'
import { PageTitle } from '@/components/atoms/PageTitle'
import { WizardForm } from '@/components/organisms/WizardForm'
import { FormInput } from '@/components/molecules/FormInput'
import { FormikConfig } from 'formik/dist/types'
import { path } from '@/types/path'

type Props = Pick<
  FormikConfig<{
    country: string
  }>,
  'initialValues' | 'validationSchema' | 'onSubmit'
>

export const WizardFourth = ({
  initialValues,
  validationSchema,
  onSubmit,
}: Props) => {
  return (
    <Box>
      <PageTitle title={'Wizard: Fourth page'} />
      <WizardForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        back={path.integration.wizard.third}
        next={path.integration.wizard.fifth}
      >
        {({ errors, touched }) => (
          <FormInput
            error={errors.country}
            touched={touched.country}
            id={'country'}
            label={'Country'}
          />
        )}
      </WizardForm>
    </Box>
  )
}
