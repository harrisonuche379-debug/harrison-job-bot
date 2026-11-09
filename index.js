async function main() {
  console.log("Bot started:", new Date().toISOString());
  try {
    const res = await fetch("https://remotive.com/api/remote-jobs?search=pastor&limit=10");
    const data = await res.json();
    console.log("Found " + (data.jobs?.length || 0) + " pastor jobs");
    (data.jobs || []).forEach((job, i) => {
      console.log((i+1) + ". " + job.title + " - " + job.company_name + " - " + job.url);
    });
    console.log("Bot finished successfully");
  } catch (err) {
    console.log("Error:", err.message);
  }
}
main();
