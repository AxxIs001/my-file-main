Function multiply(int n){
  return (int m) => n * m;;
}
void main() {

  int result1 = multiply(5)(6); // 30
  print(result1);        // 30
}