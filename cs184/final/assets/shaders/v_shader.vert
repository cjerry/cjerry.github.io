attribute vec4 aVertexPosition;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;


varying float alpha

void main() {
  gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
}
