import {
  Box,
  Card,
  CardContent,
  Divider,
  LinearProgress,
  Typography,
} from '@mui/material'
import { Formik } from 'formik'
import FormButtons from '../../components/FormButtons/FormButtons'
import PageContainer from '../../components/PageContainer/PageContainer'
import TextInput from '../../components/TextInput/TextInput'
import { useUserCreation } from './useUserCreation'

const UserCreation = () => {
  const {
    title,
    initialValues,
    onSubmit,
    validationSchema,
    goBack,
    isLoading,
  } = useUserCreation()

  return (
    <PageContainer withBack title={'Dashboard'}>
      <Card>
        {isLoading && <LinearProgress />}
        <CardContent>
          <Typography variant='h6' gutterBottom>
            {title}
          </Typography>
        </CardContent>
        <Divider />
        <CardContent>
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={onSubmit}
          >
            <Box>
              <TextInput
                id='name'
                title='Name'
                placeholder='John Smith'
                loading={isLoading}
              />
              <TextInput
                loading={isLoading}
                id='email'
                title='Email'
                placeholder='jsmith@proexe.pl'
              />
              <FormButtons onCancel={goBack} loading={isLoading} />
            </Box>
          </Formik>
        </CardContent>
      </Card>
    </PageContainer>
  )
}

export default UserCreation
