<template>
  <div class="privacy-wrap">
    <div class="privacy-container pt-10">
      <h1>개인정보처리방침</h1>
      <p class="last-updated">최종 수정일: 2026년 6월 13일</p>

      <section>
        <h2>1. 개인정보 수집 목적 및 항목</h2>
        <p>녹색에너지포럼(이하 "단체")은 아래의 목적으로 개인정보를 수집·이용합니다.</p>
        <table>
          <thead>
            <tr>
              <th>목적</th>
              <th>수집 항목</th>
              <th>보유 기간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>회원 가입 및 로그인</td>
              <td>이메일 주소, 비밀번호(암호화)</td>
              <td>회원 탈퇴 시까지</td>
            </tr>
            <tr>
              <td>게시글 작성 및 활동</td>
              <td>이메일, 작성 콘텐츠</td>
              <td>회원 탈퇴 시까지</td>
            </tr>
            <tr>
              <td>서비스 이용 통계</td>
              <td>방문 기록, 접속 IP (익명 처리)</td>
              <td>2년</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>2. 개인정보 수집 방법</h2>
        <p>단체는 다음과 같은 방법으로 개인정보를 수집합니다.</p>
        <ul>
          <li>홈페이지 회원 가입 시 이용자가 직접 입력</li>
          <li>설문조사 참여 시 이용자가 직접 입력</li>
          <li>서비스 이용 과정에서 자동 생성·수집 (접속 로그, 쿠키 등)</li>
        </ul>
      </section>

      <section>
        <h2>3. 개인정보 제3자 제공</h2>
        <p>단체는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다.</p>
        <ul>
          <li>이용자가 사전에 동의한 경우</li>
          <li>법령에 따른 경우</li>
        </ul>
      </section>

      <section>
        <h2>4. 개인정보 처리 위탁</h2>
        <p>단체는 서비스 운영을 위해 아래 업체에 개인정보 처리를 위탁합니다.</p>
        <table>
          <thead>
            <tr>
              <th>수탁 업체</th>
              <th>위탁 업무</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google Firebase (Google LLC)</td>
              <td>회원 인증, 데이터 저장, 파일 업로드</td>
            </tr>
            <tr>
              <td>Google Analytics</td>
              <td>서비스 이용 통계 분석</td>
            </tr>
            <tr>
              <td>Vercel Inc.</td>
              <td>웹사이트 호스팅</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>5. 개인정보 보유 및 이용 기간</h2>
        <p>단체는 개인정보 수집 및 이용 목적이 달성된 후 해당 정보를 지체 없이 파기합니다. 단, 관계 법령에 따라 보존할 필요가 있는 경우 법령에서 정한 기간 동안 보관합니다.</p>
      </section>

      <section>
        <h2>6. 쿠키(Cookie) 운영</h2>
        <p>단체는 서비스 이용 편의를 위해 쿠키를 사용할 수 있습니다. 이용자는 브라우저 설정을 통해 쿠키 저장을 거부할 수 있으며, 이 경우 일부 서비스 이용에 제한이 있을 수 있습니다.</p>
      </section>

      <section>
        <h2>7. 이용자 권리</h2>
        <p>이용자는 다음과 같은 권리를 행사할 수 있습니다.</p>
        <ul>
          <li>개인정보 열람 요청</li>
          <li>개인정보 정정·삭제 요청</li>
          <li>개인정보 처리 정지 요청</li>
          <li>회원 탈퇴(개인정보 삭제)</li>
        </ul>
        <p>위 권리 행사는 아래 개인정보 보호책임자에게 이메일로 문의하시기 바랍니다.</p>
      </section>

      <section>
        <h2>8. 개인정보 보호책임자</h2>
        <table>
          <tbody>
            <tr>
              <td>단체명</td>
              <td>녹색에너지포럼</td>
            </tr>
            <tr>
              <td>주소</td>
              <td>울산광역시 남구 삼산로67번길 27-1</td>
            </tr>
            <tr>
              <td>전화</td>
              <td>052-227-4111</td>
            </tr>
            <tr>
              <td>이메일</td>
              <td>noksek@hanmail.net</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>9. 개인정보 침해 신고</h2>
        <p>개인정보 침해에 관한 신고나 상담은 아래 기관에 문의하실 수 있습니다.</p>
        <ul>
          <li>개인정보보호위원회: <a href="https://www.pipc.go.kr" target="_blank">www.pipc.go.kr</a> / 국번없이 182</li>
          <li>개인정보 침해신고센터: <a href="https://privacy.kisa.or.kr" target="_blank">privacy.kisa.or.kr</a> / 국번없이 118</li>
        </ul>
      </section>

      <div class="back-btn">
        <NuxtLink to="/">
          <UButton variant="outline">← 홈으로 돌아가기</UButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: '개인정보처리방침',
  description: '울산독수리 웹사이트 개인정보처리방침'
})
</script>

<style scoped>
/* ── Light mode ── */
.privacy-wrap {
  background-color: #f8fafc;
  min-height: 100vh;
  padding: 4rem 1rem 6rem;
}
.privacy-container {
  max-width: 860px;
  margin: 0 auto;
}
h1 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #0f172a;
}
.last-updated {
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 3rem;
}
section {
  margin-bottom: 2.5rem;
}
h2 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid #cbd5e1;
  color: #1e293b;
}
p, li {
  font-size: 0.95rem;
  line-height: 1.9;
  color: #1e293b;
}
ul {
  padding-left: 1.4rem;
  list-style: disc;
}
ul li {
  margin-bottom: 0.3rem;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 0.8rem;
  font-size: 0.9rem;
}
th, td {
  border: 1px solid #cbd5e1;
  padding: 0.6rem 0.9rem;
  text-align: left;
  color: #1e293b;
}
th {
  background-color: #e2e8f0;
  font-weight: 600;
  color: #0f172a;
}
a {
  color: #16a34a;
  text-decoration: underline;
}
.back-btn {
  margin-top: 3rem;
}

/* ── Dark mode ── */
.dark .privacy-wrap {
  background-color: #0f172a;
}
.dark h1 {
  color: #f1f5f9;
}
.dark .last-updated {
  color: #94a3b8;
}
.dark h2 {
  color: #e2e8f0;
  border-bottom-color: #334155;
}
.dark p,
.dark li {
  color: #cbd5e1;
}
.dark th,
.dark td {
  border-color: #334155;
  color: #e2e8f0;
}
.dark th {
  background-color: #1e293b;
  color: #f1f5f9;
}
.dark td {
  background-color: #0f172a;
}
.dark a {
  color: #4ade80;
}
</style>
