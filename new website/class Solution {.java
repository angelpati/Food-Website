class Solution {
    static boolean Sortedarray(int arr[],int length,int i,int j){
        for(i=0;i<arr.length;i++){
            for(j=i+1;j<arr.length;j++){
                if(arr[j]<arr[i]){ 
                    return false;
                }
            }
        }
    }
    public static void main(String args[]){
        int arr[]={2,8,4,6};
        int n=4;
        System.out.println(Sortedarray(arr,n));
    }
}