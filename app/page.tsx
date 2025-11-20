export default function Home() {
  return (
    <div style={{minHeight:"100vh", background:"linear-gradient(to br, #a855f7, #3b82f6)", display:"flex", alignItems:"center", justifyContent:"center", padding:"20px"}}>
      <div style={{background:"white", borderRadius:"30px", padding:"50px", textAlign:"center", boxShadow:"0 25px 50px rgba(0,0,0,0.3)"}}>
        <h1 style={{fontSize:"50px", fontWeight:"bold", marginBottom:"20px"}}>AskForAdvice</h1>
        <p style={{fontSize:"24px", marginBottom:"40px"}}>Post a question · People pay to answer · You pick the winner</p>
        <a href="/post" style={{background:"black", color:"white", padding:"20px 40px", borderRadius:"50px", fontSize:"24px", fontWeight:"bold", textDecoration:"none"}}>Start Now →</a>
      </div>
    </div>
  );
        }
