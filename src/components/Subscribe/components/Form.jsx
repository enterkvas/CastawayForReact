import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import Field from './Field';
import styles from './Form.module.scss';
import AppButton from '../../AppButton/AppButton';

const schema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters'),
  email: z
    .string()
    .email('Invalid email format'),
});

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('DATA:', data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      
      <Field
        register={register('name')}
        placeholder="Name"
        error={errors.name}
      />

      <Field
        register={register('email')}
        placeholder="Email"
        error={errors.email}
      />

      <AppButton type='submit'>Submit</AppButton>

    </form>
  );
}