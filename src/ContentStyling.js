import styled from "styled-components";

export const ModalWrap = styled.div`
  background-color: #00000082;
  position: fixed;
  z-index: 99999;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModelContentWrap = styled.div`
  background-color: white;
  height: 84vh;
  width: 77vw;
  box-shadow: 2px 2px 10px 7px #00000085;
  border-radius: 4px;
  padding: 13px;
  display: grid;
  grid-template-rows: 6vh 6vh 68vh 6vh;
`;

export const ModalHeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ModalSectionWrap = styled.div`
  overflow-y: auto;
  box-shadow: 1px 1px 8px 2px #808080a1;
  border-radius: 5px;
  padding: 14px;
  margin: 10px 2px 12px;
`;
export const ModalFooterWrap = styled.div``;
export const ModalTitle = styled.h2``;
export const CloseModal = styled.div``;
export const ModalSummaryWrap = styled.p``;

export const Button = styled.button`
  background-color: white;
  box-shadow: 0 0 0px 0 gray;
  border: none;
  margin: 10px;
  cursor: pointer;
  border-radius: 2px;
  transition: 0.2s;
  padding: 4px 6px;
  :hover {
    box-shadow: 1px 1px 4px 1px #3b7dbe;
  }
`;

export const Table = styled.table`
  padding: 5px;
  tr {
    padding: 5px;
  }
`;
