import {
  Button,
  CloseModal,
  ModalFooterWrap,
  ModalHeaderWrap,
  ModalSectionWrap,
  ModalSummaryWrap,
  ModalTitle,
  ModalWrap,
  ModelContentWrap
} from "./ContentStyling";
export default function Modal(props) {
  const hj = [];
  for (let i = 0; i < 100; i++) hj.push(2);
  return (
    <ModalWrap>
      <ModelContentWrap>
        <ModalHeaderWrap>
          <ModalTitle>Add/Update new Product</ModalTitle>
          <CloseModal>&times;</CloseModal>
        </ModalHeaderWrap>
        <ModalSummaryWrap>
          Kindly add/update any new product if required
        </ModalSummaryWrap>
        <ModalSectionWrap>{props.children}</ModalSectionWrap>
        <ModalFooterWrap>
          <Button>Add New Product</Button>
          <Button>Close</Button>
        </ModalFooterWrap>
      </ModelContentWrap>
    </ModalWrap>
  );
}
