export default function Post() {
  const prices = [5,10,25,50,100,200];
  return (
    <div style={{minHeight:"100vh",background:"linear-gradient(to br,#a855f7,#3b82f6)",display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"}}>
      <div style={{background:"white",borderRadius:"30px",padding:"40px",maxWidth:"600px",width:"100%"}}>
        <h1 style={{fontSize:"40px",fontWeight:"bold",textAlign:"center",marginBottom:"30px"}}>Post Your Question</h1>
        <textarea placeholder="What do you need advice on?" style={{width:"100%",height:"180px",padding:"20px",borderRadius:"16px",border:"2px solid #ccc",fontSize:"18px"}}></textarea>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px",marginTop:"40px"}}>
          {prices.map(p => (
            <button key={p} onClick={()=>alert(`$${p} selected! Real payments next`)} style={{background:"black",color:"white",padding:"40px",borderRadius:"20px",fontSize:"36px",fontWeight:"bold"}}>
              ${p}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
    }
