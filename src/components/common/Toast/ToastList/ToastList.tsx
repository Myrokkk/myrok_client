import Toast from '~/components/common/Toast/Toast';
import { toastListContainer } from '~/components/common/Toast/ToastList/ToastList.styles';
import { useToast } from '~/components/common/Toast/useToast';

const ToastList = () => {
  const { toastList } = useToast();

  return (
    <div css={toastListContainer}>
      {toastList.map((toast) => {
        const { id, status, message, isActive } = toast;

        return (
          <Toast
            key={id}
            id={id}
            status={status}
            message={message}
            isActive={isActive}
          />
        );
      })}
    </div>
  );
};

export default ToastList;
