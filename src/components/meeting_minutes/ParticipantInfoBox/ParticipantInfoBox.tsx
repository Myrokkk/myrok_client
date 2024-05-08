import Tag from '~/components/common/Tag/Tag';
import Text from '~/components/common/Text/Text';

  return (
    <div css={participantInfoBoxContainer}>
      <Text size="xxl" weight="bold">
        참가자
      </Text>
      <div css={participantContainer}>
        {members.map((member) => {
          return (
            <Tag.Check
              key={member}
              css={tagStyling}
              act="check"
              handleTagCheck={() => {}}
              content={member}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ParticipantInfoBox;
