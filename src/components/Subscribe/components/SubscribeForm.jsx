import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import SubscribeField from './SubscribeField';
import styles from './SubscribeForm.module.scss';
import AppButton from '../../AppButton/AppButton';

const schema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters'),
  email: z
    .string()
    .email('Invalid email format'),
});

export default function SubscribeForm() {
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
      
      <SubscribeField
        register={register('name')}
        placeholder="Name"
        error={errors.name}
      />

      <SubscribeField
        register={register('email')}
        placeholder="Email"
        error={errors.email}
      />

      {/* <button className={styles.button} type="submit">
        Submit
      </button> */}

			{/*<AppButton />*/}
      <AppButton type='submit'>Submit</AppButton>

    </form>
  );
}