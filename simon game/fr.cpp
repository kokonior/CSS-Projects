#include<iostream>
using namespace std;
int main(){

char name[20]= "Abhishek bahukhandi";
cout<<name;
char passion[30]="Coding";
cout<<passion;
 bool live=true; 
 int alive=0;
 while(live)
 {
 string docode =(alive>0)?"DO CODE":"Die";
 cout<<docode<<endl;
 alive++;
 }
return 0;
}