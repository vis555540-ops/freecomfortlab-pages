export default {
  async fetch(request) {
    const url = new URL(request.url);

    // 1) /api/video-normalize → 집 서버 포트 5001
    if (url.pathname.startsWith("/api/video-normalize")) {
      return fetch("http://192.168.0.12:5001/api/video-normalize", {
        method: request.method,
        headers: request.headers,
        body: request.body
      });
    }

    // 2) /api/stamp-extract 기존 유지
    if (url.pathname.startsWith("/api/stamp-extract")) {
      return fetch("http://192.168.0.12:5001/api/stamp-extract", {
        method: request.method,
        headers: request.headers,
        body: request.body
      });
    }

    // 3) 기본 — static 파일 반환
    return fetch(request);
  }
};
