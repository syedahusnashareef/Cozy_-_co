(()=> {
const $=s=>document.querySelector(s);
const url=window.COZY_SUPABASE_URL;
const key=window.COZY_SUPABASE_KEY;
const c=window.supabase.createClient(url,key);
const endpoint=url+"/functions/v1/cozy-hero-admin";
const auth=$("#auth-panel"),studio=$("#studio-panel"),as=$("#auth-status"),ss=$("#studio-status");
let password="";
const say=(el,s)=>el.textContent=s;
async function current(){
 const {data,error}=await c.from("site_settings").select("value").eq("key","hero_video_path").maybeSingle();
 if(error){say(ss,"Could not load current video: "+error.message);return}
 if(data?.value){const {data:u}=c.storage.from("hero-media").getPublicUrl(data.value);$("#preview").src=u.publicUrl;$("#current-label").textContent="Published: "+data.value}
 else{$("#preview").removeAttribute("src");$("#preview").load();$("#current-label").textContent="No custom video published yet."}
}
function openStudio(){auth.classList.add("hidden");studio.classList.remove("hidden");current()}
$("#login").onclick=async()=>{
 const p=$("#password").value;
 if(!p){say(as,"Enter your password first.");return}
 $("#login").disabled=true;say(as,"Checking password…");
 try{
  const form=new FormData();form.append("action","check");
  const r=await fetch(endpoint,{method:"POST",headers:{"x-cozy-password":p},body:form});
  const d=await r.json();
  if(!r.ok)throw new Error(d.error||"Access denied.");
  password=p;openStudio();say(ss,"Welcome back. Choose a video to publish.");
 }catch(e){say(as,e.message||"Could not open panel. Try again.");}
 finally{$("#login").disabled=false}
};
$("#password").addEventListener("keydown",e=>{if(e.key==="Enter")$("#login").click()});
$("#logout").onclick=()=>{password="";$("#password").value="";studio.classList.add("hidden");auth.classList.remove("hidden");say(as,"You are signed out.")};
$("#video-file").onchange=()=>{
 const f=$("#video-file").files?.[0];if(!f)return;
 if(!f.type.startsWith("video/")){say(ss,"Choose a video file.");return}
 if(f.size>150*1024*1024){say(ss,"File is over 150 MB. Compress it and try again.");$("#video-file").value="";return}
 $("#preview").src=URL.createObjectURL(f);say(ss,f.name+" · "+(f.size/1048576).toFixed(1)+" MB selected.")
};
$("#upload").onclick=async()=>{
 const f=$("#video-file").files?.[0];if(!f){say(ss,"Choose a video from your gallery first.");return}
 $("#upload").disabled=true;say(ss,"Uploading and publishing… keep this page open.");
 try{
  const form=new FormData();form.append("action","publish");form.append("video",f);
  const r=await fetch(endpoint,{method:"POST",headers:{"x-cozy-password":password},body:form});
  const d=await r.json();if(!r.ok)throw new Error(d.error||"Upload failed.");
  $("#video-file").value="";say(ss,"Published! Refresh the public website to see your new hero video.");await current();
 }catch(e){say(ss,e.message||"Upload failed. Try again.");}
 finally{$("#upload").disabled=false}
};
$("#remove").onclick=async()=>{
 if(!confirm("Remove the custom video from the public homepage?"))return;
 const form=new FormData();form.append("action","remove");
 try{const r=await fetch(endpoint,{method:"POST",headers:{"x-cozy-password":password},body:form});const d=await r.json();if(!r.ok)throw new Error(d.error||"Could not remove video.");say(ss,"Custom video removed. The café photo fallback will show.");await current()}
 catch(e){say(ss,e.message||"Could not remove video.")}
};
})();