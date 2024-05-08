import { type ChangeEventHandler, useState } from 'react';
import { useToast } from '~/components/common/Toast/useToast';

export const useRecordWriteInfoBox = () => {
  const [tags, setTags] = useState<Set<string>>(new Set());
  const [tag, setTag] = useState('');
  const [title, setTitle] = useState('');
  const [isWarn, setIsWarn] = useState(false);
  const [warnText, setWarnText] = useState('');
  const { showToast } = useToast();

  const handleTitleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value: newTitle } = e.target;

    setTitle(newTitle);
  };

  const handleTagChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const newTag = e.target.value.replace(/\s/g, '');
    const isSpace = e.target.value.slice(-1) === ' ' ? true : false;

    if (isSpace && newTag.length !== 0) {
      if (tags.size === 10) {
        setIsWarn(true);
        setWarnText('태그는 최대 10개까지 추가할 수 있습니다.');
        return;
      }
      if (tags.has(newTag)) {
        setIsWarn(true);
        setWarnText('이미 작성된 태그입니다.');
        return;
      }

      setTags((prev) => new Set([...prev, tag]));
      setTag('');
      setIsWarn(false);
      return;
    }

    setTag(newTag);
  };

  const handleTagDelete = (deleteTag: string) => {
    if (tags.delete(deleteTag)) {
      showToast('success', `'${deleteTag}' 태그를 삭제했습니다.`);
    }
  };

  return {
    title,
    tag,
    tags,
    isWarn,
    warnText,

    handler: {
      handleTitleChange,
      handleTagChange,
      handleTagDelete,
    },
  };
};
