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
              <S.Button
                onClick={() => downloadFile(totalPdfUrl, "종합분석결과")}
              >
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
                  onClick={() => downloadFile(url, `${index + 1}회차 분석 PDF`)}
                >
                  상세 분석 PDF 다운로드 {index + 1}
                </S.Button>
              ))}
            </S.DownloadButtonsContainer>
          </div>
        )}
      </div>
    </S.InnerBox>
  );
};

export default AnalysisCompleteState;
