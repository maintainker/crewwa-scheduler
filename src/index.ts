import { crawl } from "./crawler/index.ts";

async function main() {
  try {
    await crawl();
  } catch (err) {
    console.error("❌ 오류 발생:", err);
  }
}

main();
