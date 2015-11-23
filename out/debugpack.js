goo.EntityCounter=function(){"use strict";function e(e){this.goo=null,this.skipFrames=e||20,this.texHandle=null}function t(){var e=document.createElement("div");e.id="_entitycounterdiv";var t='<span style="font-size: x-small;font-family: sans-serif">Counter</span><br /><textarea cols="30" rows="6" id="_entitycountertex">...</textarea>';return e.innerHTML=t,e.style.position="absolute",e.style.zIndex="2001",e.style.backgroundColor="#BBBBBB",e.style.left="10px",e.style.bottom="10px",e.style.webkitTouchCallout="none",e.style.webkitUserSelect="none",e.style.khtmlUserSelect="none",e.style.mozUserSelect="none",e.style.msUserSelect="none",e.style.userSelect="none",e.style.padding="3px",e.style.borderRadius="6px",document.body.appendChild(e),document.getElementById("_entitycountertex")}return e.prototype.inject=function(e){this.goo=e,this.texHandle=t();var n=this,r=0;return this.goo.callbacks.push(function(){if(r--,0>=r){r=n.skipFrames;var e="";for(var t in n.goo.world._systems){var o=n.goo.world._systems[t];e+=o.type+": "+o._activeEntities.length+"\n"}n.texHandle.value=e}}),this},e}(),goo.BoundingVolumeMeshBuilder=function(e,t,n,r,o){"use strict";function i(){}function a(e,t,n){var o=[e,t,n,e,t,-n,e,-t,n,e,-t,-n,-e,t,n,-e,t,-n,-e,-t,n,-e,-t,-n],i=[0,1,0,2,1,3,2,3,4,5,4,6,5,7,6,7,0,4,1,5,2,6,3,7],a=new r(r.defaultMap([r.POSITION]),o.length/3,i.length);return a.getAttributeBuffer(r.POSITION).set(o),a.getIndexBuffer().set(i),a.indexLengths=null,a.indexModes=["Lines"],a}function s(e,t){e=e||1,t=t||8;for(var n=[],o=[],i=2*Math.PI/t,a=0,s=0;t>a;a++,s+=i)n.push(Math.cos(s)*e,Math.sin(s)*e,0),o.push(a,a+1);o[o.length-1]=0;var u=new r(r.defaultMap([r.POSITION]),t,o.length);return u.getAttributeBuffer(r.POSITION).set(n),u.getIndexBuffer().set(o),u.indexLengths=null,u.indexModes=["Lines"],u}function u(e){e=e||1;var t,r=new n,i=128,a=s(e,i);t=new o,r.addMeshData(a,t),t=new o,t.rotation.fromAngles(0,Math.PI/2,0),t.update(),r.addMeshData(a,t),t=new o,t.rotation.fromAngles(Math.PI/2,Math.PI/2,0),t.update(),r.addMeshData(a,t);var u=r.build();return u[0]}return i.buildBox=function(e){var t=a(e.xExtent,e.yExtent,e.zExtent);return t},i.buildSphere=function(e){var t=u(e.radius);return t},i.build=function(n){return n instanceof e?i.buildBox(n):n instanceof t?i.buildSphere(n):void 0},i}(goo.BoundingBox,goo.BoundingSphere,goo.MeshBuilder,goo.MeshData,goo.Transform),goo.LightDebug=function(e,t,n,r,o,i,a){"use strict";function s(){this._ball=new r(12,12,.3),this._pointLightMesh=s._buildPointLightMesh(),this._spotLightMesh=s._buildSpotLightMesh(),this._directionalLightMesh=s._buildDirectionalLightMesh()}function u(t,n){t=t||1,n=n||8;for(var r=[],o=[],i=2*Math.PI/n,a=0,s=0;n>a;a++,s+=i)r.push(Math.cos(s)*t,Math.sin(s)*t,0),o.push(a,a+1);o[o.length-1]=0;var u=new e(e.defaultMap([e.POSITION]),n,o.length);return u.getAttributeBuffer(e.POSITION).set(r),u.getIndexBuffer().set(o),u.indexLengths=null,u.indexModes=["Lines"],u}function l(){var e,r=1,o=new t,i=128,a=u(r,i);e=new n,o.addMeshData(a,e),e=new n,e.rotation.fromAngles(0,Math.PI/2,0),e.update(),o.addMeshData(a,e),e=new n,e.rotation.fromAngles(Math.PI/2,Math.PI/2,0),e.update(),o.addMeshData(a,e);var s=o.build();return s[0]}function d(t){t=t||8;for(var n=[0,0,0],r=[],o=2*Math.PI/t,i=0,a=0;t>i;i++,a+=o)n.push(Math.cos(a),Math.sin(a),1),r.push(0,i+1);var s=new e(e.defaultMap([e.POSITION]),t+1,r.length);return s.getAttributeBuffer(e.POSITION).set(n),s.getIndexBuffer().set(r),s.indexLengths=null,s.indexModes=["Lines"],s}function h(){for(var e=-1,r=new t,o=64,i=2,a=e/2,s=a,l=1;i>=l;l++){var h=u(s*l,o),p=new n;p.translation.setDirect(0,0,a*l),p.update(),r.addMeshData(h,p)}var c=d(4),p=new n;p.scale.setDirect(s*i,s*i,a*i),p.update(),r.addMeshData(c,p);var f=r.build();return f[0]}function p(t){t=t||8;for(var n=[],r=[],o=2*Math.PI/t,i=0,a=0;t>i;i++,a+=o)n.push(Math.cos(a),Math.sin(a),0),n.push(Math.cos(a),Math.sin(a),1),r.push(2*i,2*i+1);var s=new e(e.defaultMap([e.POSITION]),2*t,r.length);return s.getAttributeBuffer(e.POSITION).set(n),s.getIndexBuffer().set(r),s.indexLengths=null,s.indexModes=["Lines"],s}function c(){for(var e=new t,r=64,o=2,i=10/o,a=1,s=0;o>s;s++){var l=u(a,r),d=new n;d.translation.z=-i*s,d.update(),e.addMeshData(l,d)}var h=p(4),d=new n;d.scale.setDirect(a,a,-i*o),d.update(),e.addMeshData(h,d);var c=e.build();return c[0]}return s.prototype.getMesh=function(e,t){return e instanceof o?t.full?[this._ball,this._pointLightMesh]:[this._ball]:e instanceof a?t.full?[this._ball,this._spotLightMesh]:[this._ball]:e instanceof i?t.full?[this._ball,this._directionalLightMesh]:[this._ball]:void 0},s._buildPointLightMesh=function(){return l()},s._buildSpotLightMesh=function(){return h()},s._buildDirectionalLightMesh=function(){return c()},s}(goo.MeshData,goo.MeshBuilder,goo.Transform,goo.Sphere,goo.PointLight,goo.DirectionalLight,goo.SpotLight),goo.CameraDebug=function(e,t,n,r,o,i){"use strict";function a(){this._camera=a.buildCamera()}return a.prototype.getMesh=function(e,t){return t.full?[this._camera,a.buildFrustum(e)]:[this._camera]},a.buildFrustum=function(t){var n,r,o=t.near,i=t.far,a=t.aspect;if(0===t.projectionMode){var s=Math.tan(t.fov/2*Math.PI/180);n=s*i,r=s*o}else{var u=t.size||100;n=u,r=u}var l,d,h,p;l={x:-n*a,y:n,z:-i},d={x:-n*a,y:-n,z:-i},h={x:n*a,y:-n,z:-i},p={x:n*a,y:n,z:-i};var c,f,g,m;c={x:-r*a,y:r,z:-o},f={x:-r*a,y:-r,z:-o},g={x:r*a,y:-r,z:-o},m={x:r*a,y:r,z:-o};var b=[];b.push(l.x,l.y,l.z),b.push(d.x,d.y,d.z),b.push(h.x,h.y,h.z),b.push(p.x,p.y,p.z),b.push(c.x,c.y,c.z),b.push(f.x,f.y,f.z),b.push(g.x,g.y,g.z),b.push(m.x,m.y,m.z);var y=[];y.push(0,1),y.push(1,2),y.push(2,3),y.push(3,0),y.push(4,5),y.push(5,6),y.push(6,7),y.push(7,4),y.push(0,4),y.push(1,5),y.push(2,6),y.push(3,7);var M=new e(e.defaultMap([e.POSITION]),8,24);return M.getAttributeBuffer(e.POSITION).set(b),M.getIndexBuffer().set(y),M.indexLengths=null,M.indexModes=["Lines"],M},a.buildCamera=function(){var a=new t,s=new n,u=new i(32,.6),l=new i(32,.6),d=new o(.3,1,1.6),h=new o(.2,.15,.7);h.applyFunction(e.POSITION,function(e){return new r(e.x+e.x/(.3*(e.z+1.1)),e.y+e.y/(.3*(e.z+1.1)),e.z)}),s.translation.setDirect(0,0,0),s.update(),a.addMeshData(h,s),s.translation.setDirect(0,0,1.3),s.update(),a.addMeshData(d,s),s.scale.setDirect(1,1,.5),s.setRotationXYZ(0,Math.PI/2,0),s.translation.setDirect(0,1.2,.6),s.update(),a.addMeshData(u,s),s.translation.setDirect(0,1.2,2),s.update(),a.addMeshData(l,s);var p=a.build();return p[0]},a}(goo.MeshData,goo.MeshBuilder,goo.Transform,goo.Vector3,goo.Box,goo.Cylinder),goo.MeshRendererDebug=function(e){"use strict";function t(){this._meshes=[n(1,1,1),null]}function n(t,n,r){var o=[t,n,r,t,n,-r,t,-n,r,t,-n,-r,-t,n,r,-t,n,-r,-t,-n,r,-t,-n,-r],i=[0,1,0,2,1,3,2,3,4,5,4,6,5,7,6,7,0,4,1,5,2,6,3,7],a=new e(e.defaultMap([e.POSITION]),o.length/3,i.length);return a.getAttributeBuffer(e.POSITION).set(o),a.getIndexBuffer().set(i),a.indexLengths=null,a.indexModes=["Lines"],a}return t.prototype.getMesh=function(){return this._meshes},t}(goo.MeshData),goo.SkeletonDebug=function(e,t,n,r,o){"use strict";function i(){}var a=new t;return i.prototype.getMesh=function(e){var t=e._skeleton._joints;return[this._buildLines(t),this._buildBoxes(t)]},i.prototype._buildBoxes=function(t){var n=new r,i=new e(2,2,2);i.attributeMap.WEIGHTS=o.createAttribute(4,"Float"),i.attributeMap.JOINTIDS=o.createAttribute(4,"Float"),i.rebuildData(),i.rebuild();for(var s=0;s<t.length;s++)a.matrix.copy(t[s]._inverseBindPose.matrix).invert(),this._stuffBox(i,t[s]),n.addMeshData(i,a);var u=n.build(),l=u[0];return this._buildPaletteMap(l,t),l},i.prototype._buildLines=function(e){for(var t=[],r=[],i=[],s=[],u=0,l=a.matrix.data,d=0;d<e.length;d++){var h=e[d];if(h._parentIndex!==n.NO_PARENT){var p=e[h._parentIndex];r.push(1,0,0,0,1,0,0,0),i.push(h._index,0,0,0,p._index,0,0,0),s.push(2*u,2*u+1),u++,a.matrix.copy(h._inverseBindPose.matrix).invert(),t.push(l[12],l[13],l[14]),a.matrix.copy(p._inverseBindPose.matrix).invert(),t.push(l[12],l[13],l[14])}}var c=new o(o.defaultMap([o.POSITION,o.WEIGHTS,o.JOINTIDS]),t.length/3,s.length);return c.indexModes=["Lines"],c.getAttributeBuffer(o.POSITION).set(t),c.getAttributeBuffer(o.WEIGHTS).set(r),c.getAttributeBuffer(o.JOINTIDS).set(i),c.getIndexBuffer().set(s),this._buildPaletteMap(c,e),c},i.prototype._stuffBox=function(e,t){for(var n=e.getAttributeBuffer("WEIGHTS"),r=e.getAttributeBuffer("JOINTIDS"),o=0;o<n.length;o+=4)n[o]=1,r[o]=t._index},i.prototype._buildPaletteMap=function(e,t){for(var n=[],r=0;r<t.length;r++)n[r]=t[r]._index;e.paletteMap=n,e.weightsPerVertex=4},i}(goo.Box,goo.Transform,goo.Joint,goo.MeshBuilder,goo.MeshData),goo.DebugDrawHelper=function(e,t,n,r,o,i,a,s,u,l,d,h,p,c,f,g,m){"use strict";var b={},y=new s,M=new u,v=new l,x=new d;return b.getRenderablesFor=function(e,t){var n,o;if("LightComponent"===e.type)n=y.getMesh(e.light,t),o=new h(p.simpleColored,"DebugDrawLightMaterial");else if("CameraComponent"===e.type)n=M.getMesh(e.camera,t),o=new h(p.simpleLit,"DebugDrawCameraMaterial"),o.uniforms.materialAmbient=[.4,.4,.4,1],o.uniforms.materialDiffuse=[.6,.6,.6,1],o.uniforms.materialSpecular=[0,0,0,1];else if("MeshRendererComponent"===e.type)n=v.getMesh(),o=new h(p.simpleColored,"DebugMeshRendererComponentMaterial");else if(e instanceof r){n=x.getMesh(e,t);for(var i=[new h(p.uber,"SkeletonDebugMaterial"),new h(p.uber,"SkeletonDebugMaterial")],a=[],s=i.length;s--;){var o=i[s];o.depthState={enabled:!1,write:!1},o.renderQueue=3e3,o.uniforms.materialDiffuse=[0,0,0,1],o.uniforms.materialDiffuse[s]=.8,o.uniforms.materialAmbient=[0,0,0,1],o.uniforms.materialAmbient[s]=.5,a[s]={meshData:n[s],transform:new f,materials:[o],currentPose:e}}return a}return n.map(function(e){return{meshData:e,transform:new f,materials:[o]}})},b.update=function(e,t,n){if(t.camera&&t.camera.changedProperties){var n=t.camera;e.length>1&&(n.far/n.near!==e[1].farNear||n.fov!==e[1].fov||n.size!==e[1].size||n.aspect!==e[1].aspect||n.projectionMode!==e[1].projectionMode)&&(e[1].meshData=u.buildFrustum(n),e[1].farNear=n.far/n.near,e[1].fov=n.fov,e[1].size=n.size,e[1].aspect=n.aspect,e[1].projectionMode=n.projectionMode),t.camera.changedProperties=!1}b[t.type].updateMaterial(e[0].materials[0],t),e[1]&&b[t.type].updateMaterial(e[1].materials[0],t),e[1]&&b[t.type].updateTransform(e[1].transform,t);var r=m.mainCamera;if(r){var o=r.translation,a=e[0].transform.translation.distance(o)/30;r.projectionMode===g.Parallel&&(a=(r._frustumTop-r._frustumBottom)/20),e[0].transform.scale.setDirect(a,a,a),e[0].transform.update(),t.light&&t.light instanceof i&&(e[1]&&e[1].transform.scale.scale(a),e[1]&&e[1].transform.update())}},b.LightComponent={},b.CameraComponent={},b.LightComponent.updateMaterial=function(e,t){var n=t.light,r=e.uniforms.color=e.uniforms.color||[];r[0]=n.color.x,r[1]=n.color.y,r[2]=n.color.z},b.LightComponent.updateTransform=function(e,t){var n=t.light;if(!(n instanceof i)){var r=n.range;if(e.scale.setDirect(r,r,r),n instanceof a){var o=n.angle*Math.PI/180,s=Math.tan(o/2);e.scale.mulDirect(s,s,1)}}e.update()},b.CameraComponent.updateMaterial=function(e){e.uniforms.color=e.uniforms.color||[1,1,1]},b.CameraComponent.updateTransform=function(){},b}(goo.LightComponent,goo.CameraComponent,goo.MeshRendererComponent,goo.SkeletonPose,goo.PointLight,goo.DirectionalLight,goo.SpotLight,goo.LightDebug,goo.CameraDebug,goo.MeshRendererDebug,goo.SkeletonDebug,goo.Material,goo.ShaderLib,goo.ShaderBuilder,goo.Transform,goo.Camera,goo.Renderer),goo.MarkerComponent=function(e,t){"use strict";function n(n){e.apply(this,arguments),this.type="MarkerComponent";var r=n.meshRendererComponent.worldBound;this.meshData=t.build(r)}return n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n}(goo.Component,goo.BoundingVolumeMeshBuilder),goo.MarkerSystem=function(e,t,n,r,o,i){"use strict";function a(r){e.call(this,"MarkerSystem",["MarkerComponent"]),this.material=new t(n.simpleColored),this.material.depthState.enabled=!1,this.material.shader.uniforms.color=[0,1,0],this.goo=r,this.renderer=this.goo.renderer,this.entities=[],this.goo.callbacks.push(function(){for(var e=0;e<this.entities.length;e++){var t=this.entities[e];if(t.hasComponent("MarkerComponent")){var n=new i;n.copy(t.transformComponent.worldTransform),n.setRotationXYZ(0,0,0),n.scale.setDirect(1,1,1),n.update();var r={meshData:t.markerComponent.meshData,materials:[this.material],transform:n};this.goo.renderer.render(r,o.mainCamera,[],null,!1)}}}.bind(this))}return a.prototype=Object.create(e.prototype),a.prototype.process=function(e){this.entities=e},a}(goo.System,goo.Material,goo.ShaderLib,goo.MarkerComponent,goo.Renderer,goo.Transform),goo.Debugger=function(MarkerComponent,MarkerSystem){"use strict";function Debugger(e){this.goo=null,this.exportPicked=e||!1,this.picked=null,this.oldPicked=null}function createPanel(){var e=document.createElement("div");e.id="debugdiv";var t='<span style="font-size: x-small;font-family: sans-serif">Filter</span><br /><textarea cols="30" id="debugparams">name, Compo, tran, data</textarea><br /><span style="font-size: x-small;font-family: sans-serif">Result</span><br /><textarea readonly rows="10" cols="30" id="debugtex">Click on an entity</textarea><br />';t+='<hr /><span style="font-size: x-small;font-family: sans-serif">REPL</span><br /><textarea readonly rows="10" cols="30" id="replouttex">...</textarea><br /><textarea cols="30" id="replintex">entity.</textarea>',e.innerHTML=t,e.style.position="absolute",e.style.zIndex="2001",e.style.backgroundColor="#DDDDDD",e.style.left="10px",e.style.top="100px",e.style.webkitTouchCallout="none",e.style.webkitUserSelect="none",e.style.khtmlUserSelect="none",e.style.mozUserSelect="none",e.style.msUserSelect="none",e.style.userSelect="none",e.style.padding="3px",e.style.borderRadius="6px",document.body.appendChild(e)}function getFilterList(e){return e.split(",").map(function(e){return e.replace(/(^[\s]+|[\s]+$)/g,"")}).filter(function(e){return e.length>0}).map(function(e){return new RegExp(e)})}function stringifyTypedArray(e){if(0===e.length)return"[]";for(var t="["+e[0],n=1;n<e.length;n++)t+=" "+e[n];return t+="]"}function filterProperties(e,t,n,r){if(0===t.length)return"No interests specified;\n\nSome popular interests: is, tran, Compo\n\nEvery entry separated by a comma is a regex";if(0>r)return n+"REACHED MAXIMUM DEPH\n";if(null===e)return n+"null\n";var o=typeof e;if("undefined"===o||"number"===o||"boolean"===o||"string"===o||e instanceof Array&&("string"==typeof e[0]||"number"==typeof e[0]||"boolean"==typeof e[0]))return n+JSON.stringify(e)+"\n";if(-1!==Object.prototype.toString.call(e).indexOf("Array]"))return n+stringifyTypedArray(e)+"\n";var i=[];for(var a in e)if(e.hasOwnProperty(a)){if("function"==typeof e[a])continue;for(var s in t)if(t[s].test(a)){var u=filterProperties(e[a],t,n+" ",r-1);i.push(n+a+"\n"+u);break}}return i.join("")}function updateMarker(e,t){e!==t?(null!==t&&t.hasComponent("MarkerComponent")&&t.clearComponent("MarkerComponent"),null!==e&&e.setComponent(new MarkerComponent(e))):e.hasComponent("MarkerComponent")?e.clearComponent("MarkerComponent"):e.setComponent(new MarkerComponent(e))}function displayInfo(e){var t=getFilterList(document.getElementById("debugparams").value);e&&console.log("==> ",e);var n=filterProperties(e,t,"",20),r=document.getElementById("debugtex");r.value=n}return Debugger.prototype._setUpREPL=function(){var lastCommStr="";document.getElementById("replintex").addEventListener("keyup",function(event){event.stopPropagation();var replinElemHandle=document.getElementById("replintex"),reploutElemHandle=document.getElementById("replouttex");if(13!==event.keyCode||event.shiftKey)38===event.keyCode&&(replinElemHandle.value=lastCommStr);else{var commStr=replinElemHandle.value.substr(0,replinElemHandle.value.length-1);lastCommStr=commStr;var entity=this.picked,goo=this.goo,resultStr="";try{resultStr+=eval(commStr)}catch(err){resultStr+=err}replinElemHandle.value="entity.",reploutElemHandle.value+="\n-------\n"+resultStr,displayInfo(this.picked)}}.bind(this),!1)},Debugger.prototype._setUpPicking=function(){document.addEventListener("mouseup",function(e){e.stopPropagation();var t=e.pageX,n=e.pageY;this.goo.pick(t,n,function(e){var t=this.goo.world.entityManager.getEntityByIndex(e);t&&(this.oldPicked=this.picked,this.picked=t,this.picked===this.oldPicked&&(this.picked=null),this.exportPicked&&(window.picked=this.picked),displayInfo(this.picked),updateMarker(this.picked,this.oldPicked))}.bind(this))}.bind(this),!1)},Debugger.prototype.inject=function(e){return this.goo=e,createPanel(),this.goo.world.getSystem("MarkerSystem")||this.goo.world.setSystem(new MarkerSystem(this.goo)),this._setUpPicking(),document.getElementById("debugparams").addEventListener("keyup",function(){displayInfo(this.picked)}.bind(this)),this._setUpREPL(),this},Debugger}(goo.MarkerComponent,goo.MarkerSystem),goo.DebugRenderSystem=function(e,t,n,r,o,i){"use strict";function a(){e.call(this,"DebugRenderSystem",["TransformComponent"]),this._renderablesTree={},this.renderList=[],this.preRenderers=[],this.composers=[],this.doRender={CameraComponent:!1,LightComponent:!1,MeshRendererComponent:!1,SkeletonPose:!1},this.inserted(),this._interestComponents=["CameraComponent","LightComponent"],this.camera=null,this.lights=[],this.currentTpf=0,this.scale=20,this.cameraListener=function(e){this.camera=e.camera}.bind(this),this.lightsListener=function(e){this.lights=e}.bind(this),this.selectionRenderable=i.getRenderablesFor({type:"MeshRendererComponent"}),this.selectionActive=!1,this.oldSelectionActive=!1}return a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.prototype.setup=function(){t.addListener("goo.setCurrentCamera",this.cameraListener),t.addListener("goo.setLights",this.lightsListener)},a.prototype.inserted=function(){},a.prototype.deleted=function(e){delete this._renderablesTree[e.id]},a.prototype.process=function(e,t){for(var n,r=this.renderList.length=0,o=0;o<e.length;o++){for(var a=e[o],s=0,u=this._interestComponents.length;u>s;s++){var l=this._interestComponents[s];if(!a._hidden&&a.hasComponent(l)){var d=a.getComponent(l),h={full:this.doRender[l]||a.getComponent(l).forceDebug},p=this._renderablesTree[a.id]=this._renderablesTree[a.id]||{};if(p[l]&&(2===p[l].length&&h.full||1===p[l].length&&!h.full))n=p[l];else{n=i.getRenderablesFor(d,h);for(var c=0;c<n.length;c++){var f=n[c];f.id=a.id,f._index=a._index}p[l]=n}for(var c=0;c<n.length;c++){var f=n[c];f.transform.translation.set(a.transformComponent.worldTransform.translation),f.transform.rotation.copy(a.transformComponent.worldTransform.rotation),f.transform.scale.setDirect(1,1,1),f.transform.update()}i.update(n,d,this.camera);for(var c=0;c<n.length;c++)this.renderList[r++]=n[c]}}if(this.doRender.SkeletonPose&&a.meshDataComponent&&a.meshDataComponent.currentPose){var g=a.meshDataComponent.currentPose,p=this._renderablesTree[a.id]=this._renderablesTree[a.id]||{};if(p.skeleton)n=p.skeleton;else{n=i.getRenderablesFor(g);for(var c=0;c<n.length;c++)n[c].id=a.id;p.skeleton=n}for(var c=0;c<n.length;c++){var f=n[c];f.transform.copy(a.transformComponent.worldTransform),this.renderList[r++]=f}}}this.selectionActive&&(this.renderList[r++]=this.selectionRenderable[0]),this.renderList.length=r,this.currentTpf=t},a.prototype.render=function(e){e.checkResize(this.camera),this.camera&&e.render(this.renderList,this.camera,this.lights,null,!1)},a.prototype.renderToPick=function(e,t){e.renderToPick(this.renderList,this.camera,!1,t)},a.prototype.invalidateHandles=function(e){var t=Object.keys(this._renderablesTree);t.forEach(function(t){var n=this._renderablesTree[t],r=Object.keys(n);r.forEach(function(t){var r=n[t];r.forEach(function(t){t.materials.forEach(function(t){e.invalidateMaterial(t)}),e.invalidateMeshData(t.meshData)})})}.bind(this)),this.selectionRenderable[0].materials.forEach(function(t){e.invalidateMaterial(t)}),e.invalidateMeshData(this.selectionRenderable[0].meshData)},a.prototype.cleanup=function(){t.removeListener("goo.setCurrentCamera",this.cameraListener),t.removeListener("goo.setLights",this.lightsListener)},a}(goo.System,goo.SystemBus,goo.SimplePartitioner,goo.Material,goo.ShaderLib,goo.DebugDrawHelper),"function"==typeof require&&(define("goo/debugpack/EntityCounter",[],function(){return goo.EntityCounter}),define("goo/debugpack/BoundingVolumeMeshBuilder",[],function(){return goo.BoundingVolumeMeshBuilder}),define("goo/debugpack/shapes/LightDebug",[],function(){return goo.LightDebug}),define("goo/debugpack/shapes/CameraDebug",[],function(){return goo.CameraDebug}),define("goo/debugpack/shapes/MeshRendererDebug",[],function(){return goo.MeshRendererDebug}),define("goo/debugpack/shapes/SkeletonDebug",[],function(){return goo.SkeletonDebug}),define("goo/debugpack/DebugDrawHelper",[],function(){return goo.DebugDrawHelper}),define("goo/debugpack/components/MarkerComponent",[],function(){return goo.MarkerComponent}),define("goo/debugpack/systems/MarkerSystem",[],function(){return goo.MarkerSystem}),define("goo/debugpack/Debugger",[],function(){return goo.Debugger}),define("goo/debugpack/systems/DebugRenderSystem",[],function(){return goo.DebugRenderSystem}));