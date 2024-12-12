#include<iostream>
using namespace std;

int binarySearch(int arr[], int size, int key)
{
int s=0;
int e=size;
while (s<=e)
{
   int mid = (s+e)/2;
   if (arr[mid]==key)
   {
    return mid;
   }
   else if(arr[mid]>=key)
   {
    e=mid-1;
   }
   else
   {
    s=mid+1;
   }
   
}
return -1;
}

int main()
{
    int size;
    cout<<"enter the size";
    cin>>size;

int* arr=new int[size];
for(int i=0; i<=size; i++)
{

    cin>>arr[i];
}

int key;
cin>>key;
cout<<"your key value is"<<endl;
cout<<binarySearch( arr, size, key);
    return 0;
}