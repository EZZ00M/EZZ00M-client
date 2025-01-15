import React from "react";
import * as S from "../DragBox.style";

const AnalysisCompleteState = ({
  totalPdfUrl,
  detailPdfUrls,
  downloadFile,
}) => {
  return (
    <S.InnerBox>
      <div>
        {totalPdfUrl && (
          <div>
            <h3>종합 분석 결과</h3>
            <S.DownloadButtonsContainer>
              <S.Button onClick={() => downloadFile(totalPdfUrl)}>
                종합 분석 PDF 다운로드
              </S.Button>
            </S.DownloadButtonsContainer>
          </div>
        )}

        {detailPdfUrls && detailPdfUrls.length > 0 && (
          <div style={{ marginTop: "20px" }}>
            <h3>상세 분석 결과</h3>
            <S.DownloadButtonsContainer>
              {detailPdfUrls.map((url, index) => (
                <S.Button
                  key={index}
                  onClick={() => downloadFile(url)}
                >
                  {`${index + 1}회차 분석 PDF`}
                </S.Button>
              ))}
            </S.DownloadButtonsContainer>
          </div>
        )}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
      >
        <S.Button onClick={() => window.location.reload()}>
          다른 파일 분석하기
        </S.Button>
      </div>
    </S.InnerBox>
  );
};

export default AnalysisCompleteState;
