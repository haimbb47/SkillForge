import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

async function main() {
  console.log("🔄 Starting redeploy process...\n");

  try {
    // 清理旧的编译文件
    console.log("🧹 Cleaning old artifacts...");
    await execAsync("npm run clean");
    
    // 重新编译
    console.log("🔨 Compiling contracts...");
    await execAsync("npm run compile");
    
    // 重新部署
    console.log("🚀 Deploying contracts...");
    const { stdout } = await execAsync("npm run deploy:local");
    console.log(stdout);
    
    console.log("✅ Redeploy completed successfully!");
  } catch (error) {
    console.error("❌ Redeploy failed:", error);
    process.exit(1);
  }
}

main();


