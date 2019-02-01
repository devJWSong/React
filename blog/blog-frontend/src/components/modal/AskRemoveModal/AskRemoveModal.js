import React from 'react';
import styles from './AskRemoveModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const AskRemoveModal = ({visible, onConfirm, onCancel}) => (
  <ModalWrapper visible={visible}>
    <div className={cx('question')}>
      <div className={cx('title')}>Remove post</div>
      <div className={cx('description')}>Do you really want to remove this post</div>
    </div>
    <div className={cx('options')}>
      <Button theme="gray" onClick={onCancel}>Cancel</Button>
      <Button onClick={onConfirm}>Remove</Button>
    </div>
  </ModalWrapper>
);

export default AskRemoveModal;