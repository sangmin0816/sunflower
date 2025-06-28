# Hate Speech Comment Blocking Chrome Extension 
차별/혐오 댓글 필터링 크롬 익스텐션
---
## ✨Team Introduction
- Team Name : EWAH-ORE
- Sangmin Choi : KcBERT Deeplearning model train , GCD Server Build
- Jeemin Lee : Chrome Extension development 
---
## 🌻Project Overview
대한민국 국민 대다수가 유튜브를 장시간 시청하고 있지만, 유튜브는 비교적 낮은 심의 기준으로 인해 혐오 표현이나 차별적 콘텐츠에 쉽게 노출되고 있습니다. 기존의 혐오 표현 필터링 도구인 네이버 클린봇이나 Detoxify는 플랫폼의 제약이 있거나 한국어를 제대로 지원하지 않아 실사용에 한계가 있습니다.

이에 우리는 한국어를 지원하면서, 자체적인 필터링 기능이 없는 플랫폼에서도 사용할 수 있는 혐오 표현 및 차별 콘텐츠 필터링 서비스를 개발했습니다.

‘선플라워(Sunflower)’는 Chrome 확장 프로그램 형태로 구현되었으며, Google Cloud에서 학습된 KcBERT 모델을 활용해 혐오 표현을 실시간으로 분석하고, 그 결과에 따라 콘텐츠를 자동으로 필터링합니다.

현재는 유튜브에 한정된 형태로 시범 서비스를 운영 중이며, 향후 다양한 플랫폼에서도 적용 가능하도록 확장성과 성능 개선을 계획하고 있습니다. 또한, 별도의 딥러닝 서버 없이 TensorFlow.js 모델을 직접 임베딩함으로써 응답 시간을 줄이고, 사용자 맞춤형 금칙어 설정 기능을 추가하는 방향으로 발전시킬 예정입니다.

While the majority of South Koreans spend extended hours watching YouTube, the platform’s relatively lax content moderation often leads to exposure to hate speech and discriminatory content. Existing tools such as Naver's CleanBot or Detoxify either have platform limitations or lack Korean language support, making them difficult to use in practice.

To address this issue, we developed a hate speech and discrimination filtering service that fully supports Korean and can be applied even on platforms that do not offer built-in moderation features.

Our service, Sunflower, is implemented as a Chrome extension and utilizes the KcBERT model trained on Google Cloud to detect and filter harmful content in real time.

Currently, the service is in a pilot stage and is limited to YouTube. However, we plan to expand its compatibility across various platforms. To enhance efficiency, the model is embedded using TensorFlow.js, eliminating the need for a separate deep learning server and reducing response time. We also aim to introduce a customizable keyword filtering feature to allow user-defined moderation.



## 💻Tech Stack
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/mariaDB-003545?style=for-the-badge&logo=mariaDB&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/chromewebstore-4285F4?style=for-the-badge&logo=chromewebstore&logoColor=white"> <img src="https://img.shields.io/badge/Google%20Colab-%23F9A825.svg?style=for-the-badge&logo=googlecolab&logoColor=white"> <img src="https://img.shields.io/badge/Anaconda-%2344A833.svg?style=for-the-badge&logo=anaconda&logoColor=white"> <img src="https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white">
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white) ![Gunicorn](https://img.shields.io/badge/gunicorn-%298729.svg?style=for-the-badge&logo=gunicorn&logoColor=white) ![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)
## 🎥Preview
![sunflower-gif](https://github.com/user-attachments/assets/8aa349b5-eab7-481e-8db0-85bc33ffdbfa)
