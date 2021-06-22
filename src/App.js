import "./App.css";
import Faq from "react-faq-component";

const data = {
  title: "Computer Network Lab Codes 👩‍💻",
  rows: [
    {
      title: "To write a client-server application using UDP",
      content: `<h1>Make a Java Class File with name GroupChat.java</h1>
                <h5>Make sure your have java installed in your computer to run the code.</h5>
                <span>
                <ul>To run the code in CMD run: 
                <li>Javac GroupChat.java</li>
                <li>Java GroupChat</li>
                </ul>
                </span>
                <h6>CODE</h6>
                <code>
                import java.net.*; <br/>
import java.io.*; <br/>
import java.util.*; <br/>
public class GroupChat <br/>
{ <br/>
       private static final String TERMINATE = "Exit"; <br/>
    static String name; <br/>
    static volatile boolean finished = false; <br/>
    public static void main(String[] args) <br/>
    { <br/>
        if (args.length != 2) <br/>
            System.out.println("Two arguments required: <multicast-host> <port-number>"); <br/>
        else <br/>
        { <br/>
            try <br/>
            { <br/>
                InetAddress group = InetAddress.getByName(args[0]); <br/>
                int port = Integer.parseInt(args[1]); <br/>
                Scanner sc = new Scanner(System.in); <br/>
                System.out.print("Enter your name: "); <br/>
                name = sc.nextLine(); <br/>
                MulticastSocket socket = new MulticastSocket(port); <br/>
                <br/>
                // Since we are deploying <br/> 
                socket.setTimeToLive(0); <br/>
                <br/>
                //this on localhost only (For a subnet set it as 1) <br/>
                  
                socket.joinGroup(group); <br/>
                Thread t = new Thread(new ReadThread(socket,group,port)); <br/>
                <br/>
                // Spawn a thread for reading messages <br/>
                t.start();  <br/>
                <br/>
                // sent to the current group <br/>
                System.out.println("Start typing messages...\n"); <br/>
                while(true) <br/>
                { <br/>
                    String message; <br/>
                    message = sc.nextLine(); <br/>
                    if(message.equalsIgnoreCase(GroupChat.TERMINATE)) <br/>
                    { <br/>
                        finished = true; <br/>
                        socket.leaveGroup(group); <br/>
                        socket.close(); <br/>
                        break; <br/>
                    } <br/>
                    message = name + ": " + message; <br/>
                    byte[] buffer = message.getBytes(); <br/>
                    DatagramPacket datagram = new <br/>
                    DatagramPacket(buffer,buffer.length,group,port); <br/>
                    socket.send(datagram); <br/>
                } <br/>
            } <br/>
            catch(SocketException se) <br/>
            { <br/>
                System.out.println("Error creating socket"); <br/>
                se.printStackTrace(); <br/>
            } <br/>
            catch(IOException ie) <br/>
            { <br/>
                System.out.println("Error reading/writing from/to socket"); <br/>
                ie.printStackTrace(); <br/>
            } <br/>
        } <br/>
    } <br/>
} <br/>
class ReadThread implements Runnable <br/>
{ <br/>
    private MulticastSocket socket; <br/>
    private InetAddress group; <br/>
    private int port; <br/>
    private static final int MAX_LEN = 1000; <br/>
    ReadThread(MulticastSocket socket,InetAddress group,int port) <br/>
    { <br/>
        this.socket = socket; <br/>
        this.group = group; <br/>
        this.port = port; <br/>
    } <br/>
      
    @Override <br/>
    public void run() <br/>
    {
        while(!GroupChat.finished) <br/>
        { <br/>
                byte[] buffer = new byte[ReadThread.MAX_LEN]; <br/>
                DatagramPacket datagram = new <br/>
                DatagramPacket(buffer,buffer.length,group,port); <br/>
                String message; <br/>
            try <br/>
            { <br/>
                socket.receive(datagram); <br/>
                message = new String(buffer,0,datagram.getLength(),"UTF-8"); <br/>
                if(!message.startsWith(GroupChat.name)) <br/>
                    System.out.println(message); <br/>
            } <br/>
            catch(IOException e) <br/>
            { <br/>
                System.out.println("Socket closed!"); <br/>
            } <br/>
        } <br/>
    } <br/>
} <br/>
                </code>
                
                
                `,
    },
    {
      title: "Program to Perform Bit Stuffing ",
      content: ` <h1>Make two files called BitStuffingClient.java and BitStuffingServer.java </h1>
                <h5>Make sure your have java installed in your computer to run the code.</h5>
                <span>
                <ul>To run the code in CMD run ,
                <li>Javac BitStuffingClient.java</li>
                <li>Javac BitStuffingServer.java</li>
                <li>Java BitStuffingServer</li>
                <li>Java BitStuffingClient</li>
                </ul>
                Make sure u Run the BitStuffingServer.java first
                </span>
                <code>
                  <h1>BitStuffingServer.java</h1>
                  package bitstuffing; <br />
import java.io.*;<br />
import java.net.*;<br />
public class BitStuffingServer {<br />
    public static void main(String[] args) throws IOException<br />
    {<br />
        ServerSocket skt = new ServerSocket(6789);<br />
        <br />
        // Used to block until a client connects to the server<br />
        Socket socket = skt.accept();<br />
  
        DataInputStream dis = new DataInputStream(socket.getInputStream());<br />
        DataOutputStream dos = new DataOutputStream(socket.getOutputStream());<br />
        <br />
        // Receiving the string from the client which
        // needs to be stuffed
        String s = dis.readUTF();<br />
        System.out.println("Stuffed data from client: " + s);<br />
  
        System.out.println("Unstuffed data: ");<br />
        int cnt = 0;<br />
        <br />
        // removal of stuffed bits:
        // start from 9th bit because the first 8
        //  bits are of the special pattern.
        <br />
        for (int i = 8; i < s.length() - 8; i++) {<br />
            char ch = s.charAt(i);<br />
            if (ch == '1') {<br />
                cnt++;<br />
                System.out.print(ch);<br />
                <br />
                <br />
                // After 5 consecutive 1's one stuffed bit
                //'0' is added. We need to remove that.
                <br />
                if (cnt == 5) {<br />
                    i++;<br />
                    cnt = 0;<br />
                }<br />
            }<br />
            else {<br />
              <br />
                // print unstuffed data<br />
                System.out.print(ch);<br />
                <br />
                // we only need to maintain count 
                // of consecutive 1's<br />
                cnt = 0;<br />
            }<br />
        }<br />
        System.out.println();<br />
    }<br />
}<br />
                </code>
                
                <code>
                <h1>BitStuffingClient.java</h1>
                package bitstuffing;<br />
import java.io.*;<br />
import java.net.*;<br />
import java.util.Scanner;<br />
public class BitStuffingClient {<br />
    public static void main(String[] args) throws IOException<br />
    {<br />
      <br />
        // Opens a socket for connection<br />
        Socket socket = new Socket("localhost", 6789);<br />
  
        DataInputStream dis = new DataInputStream(socket.getInputStream());<br />
        DataOutputStream dos = new DataOutputStream(socket.getOutputStream());<br />
  
        // Scanner class object to take input<br />
        Scanner sc = new Scanner(System.in);<br />
        <br />
        // Takes input of unstuffed data from user<br />
        System.out.println("Enter data: ");<br />
        String data = sc.nextLine();<br />
  
        int cnt = 0;<br />
        String s = "";<br />
        for (int i = 0; i < data.length(); i++) {<br />
            char ch = data.charAt(i);<br />
            if (ch == '1') {<br />
              <br />
                // count number of consecutive 1's
                // in user's data<br />
                cnt++;<br />
  
                if (cnt < 5)<br />
                    s += ch;<br />
                else {<br />
  
                    // add one '0' after 5 consecutive 1's<br />
                    s = s + ch + '0';<br />
                    cnt = 0;<br />
                }<br />
            }<br />
            else {<br />
                s += ch;<br />
                cnt = 0;<br />
            }<br />
        }<br />
        <br />
        // add flag byte in the beginning<br />
        // and end of stuffed data<br />
        s = "01111110" + s + "01111110";<br />
  
        System.out.println("Data stuffed in client: " + s);<br />
        System.out.println("Sending to server for unstuffing");<br />
        dos.writeUTF(s);<br />
    }<br />
}<br />
                </code>
                `,
    },
    {
      title: "Program to Perform Byte Stuffing ",
      content: ` <h1>Make two files called BitStuffingClient.java and BitStuffingServer.java </h1>
                <h5>Make sure your have java installed in your computer to run the code.</h5>
                <span>
                <ul>To run the code in CMD run ,
                <li>Javac Byte_Stuffing.java</li>
                <li>Javac  Byte_Stuffing_Client.java</li>
                <li>Java Byte_Stuffing</li>
                <li>Java Byte_Stuffing_Client</li>
                </ul>
                Make sure u Run the Byte_Stuffing.java first
                </span>
                <code>
                <h1>Byte_Stuffing.java</h1> <br/>
                // Java code for Byte_Stuffing Receiver<br/>
// package byte_stuffing;<br/>
import java.io.*;<br/>
import java.net.*;<br/>
  
public class Byte_Stuffing {<br/>
    public static void main(String[] args) throws IOException<br/>
    {<br/>
        // Opens a socket for connection<br/>
        ServerSocket servsock = new ServerSocket(45678);<br/>
        <br/>
        // Used to block until a client connects to the server<br/>
        Socket socket = servsock.accept();<br/>
        <br/>
        // Declaring I/O Streams<br/>
        DataInputStream dis = new DataInputStream(socket.getInputStream());<br/>
        DataOutputStream dos = new DataOutputStream(socket.getOutputStream());<br/>
  
        while (true) {<br/>
            String out = new String();<br/>
            <br/>
            // Used to read the data sent by client<br/>
            String res = dis.readUTF();<br/>
            System.out.println("Message Recevied...Successfully!!!");<br/>
            System.out.println("The Stuffed Message is : " + res);<br/>
  
            for (int i = 1; i < res.length() - 1; i++) {<br/>
  
               // If data contains a 'D' or 'F' do not unstuff it<br/>
                if (res.charAt(i) == 'D' || res.charAt(i) == 'F')<br/>
                    out = out + res.charAt(i);<br/>
  
                // If data contains 'E' followed by 'E', de-stuff the former 'E'<br/>
                else if (res.charAt(i) == 'E' && res.charAt(i + 1) == 'E') {<br/>
                    out = out + 'E';<br/>
                    i++;<br/>
                }<br/>
            }<br/>
            System.out.println("The Destuffed Message is : " + out);<br/>
            dos.writeUTF("success");<br/>
            String ch = dis.readUTF();<br/>
            if (ch.equals("bye")) {<br/>
                System.out.println("Messaging is over.....EXITING");<br/>
                break;<br/>
            }<br/>
        }<br/>
        <br/>
        // Closing all connections<br/>
        socket.close();<br/>
        dis.close();<br/>
        dos.close();<br/>
    }<br/>
}<br/>
                </code><br/>
                <code><br/>
                <h1>Byte_Stuffing_Client.java</h1>
                // Java Code for Byte_Stuffing Sender<br/>
// package byte_stuffing;<br/>
import java.io.*;<br/>
import java.util.*;<br/>
import java.net.*;<br/>
  
public class Byte_Stuffing_Client {<br/>
    public static void main(String args[]) throws IOException<br/>
    {<br/>
        InetAddress ip = InetAddress.getLocalHost();<br/>
        int port = 45678;<br/>
        Scanner sc = new Scanner(System.in);<br/>
        <br/>
        // Opens a socket for connection<br/>
        Socket s = new Socket(ip, port);<br/>
        <br/>
        // Declaring I/O Streams<br/>
        DataInputStream dis = new DataInputStream(s.getInputStream());<br/>
        DataOutputStream dos = new DataOutputStream(s.getOutputStream());<br/>
        <br/>
        while (true) {<br/>
            System.out.println("Enter the Message to be Sent : ");<br/>
            String data = sc.nextLine();<br/>
            String res = new String();<br/>
            <br/>
            // Data in each frame is stuffed by 'F' at beginning and end<br/>
            data = 'F' + data + 'F';<br/>
            for (int i = 0; i < data.length(); i++) {<br/>
              <br/>
                // Stuff with 'E' if 'F' is found in the data to be sent<br/>
                if (data.charAt(i) == 'F' && i != 0 && i != (data.length() - 1))<br/>
                    res = res + 'E' + data.charAt(i);<br/>
                    <br/>
                // Stuff with 'E' if 'E' is found in the data to be sent<br/>
                else if (data.charAt(i) == 'E')<br/>
                    res = res + 'E' + data.charAt(i);<br/>
                else<br/>
                    res = res + data.charAt(i);<br/>
            }<br/>
            <br/>
            System.out.println("The data being sent (with byte stuffed) is : " + res);<br/>
            <br/>
            // Send the data to the receiver<br/>
            dos.writeUTF(res);<br/>
            System.out.println("Seding Message....");<br/>
            if (dis.readUTF().equals("success"))<br/>
                System.out.println("Thanks for the Feedback Server!!");<br/>
                <br/>
            // End Messaging<br/>
            dos.writeUTF("bye");<br/>
            break;<br/>
        }<br/>
  
        // Close all connections<br/>
        s.close();<br/>
        dis.close();<br/>
        dos.close();<br/>
    }<br/>
}<br/>
                </code>
                `,
    },
    {
      title: "Open Shortest Path First Routing Protocol ",
      content: `
      <h1>C Program</h1>
      <code>
      #include<stdio.h><br/>
#include<string.h><br/>
int main()<br/>
{<br/>
int count,src_router,i,j,k,w,v,min;<br/>
int cost_matrix[100][100],dist[100],last[100];<br/>
int flag[100];<br/>
printf("\n Enter the no of routers");<br/>
scanf("%d",&count);<br/>
printf("\n Enter the cost matrix values:");<br/>
for(i=0;i<count;i++)<br/>
{<br/>
for(j=0;j<count;j++)<br/>
{<br/>
printf("\n%d->%d:",i,j);<br/>
scanf("%d",&cost_matrix[i][j]);<br/>
if(cost_matrix[i][j]<0)cost_matrix[i][j]=1000;<br/>
}}<br/>
printf("\n Enter the source router:");<br/>
scanf("%d",&src_router);<br/>
for(v=0;v<count;v++)<br/>
{<br/>
flag[v]=0;<br/>
last[v]=src_router;<br/>
dist[v]=cost_matrix[src_router][v];<br/>
}<br/>
flag[src_router]=1;<br/>
for(i=0;i<count;i++)<br/>
{<br/>
min=1000;<br/>
for(w=0;w<count;w++)<br/>
{<br/>
if(!flag[w])<br/>
if(dist[w]<min)<br/>
{<br/>
v=w;<br/>
min=dist[w];<br/>
}}<br/>
flag[v]=1;<br/>
for(w=0;w<count;w++)<br/>
{<br/>
if(!flag[w])<br/>
if(min+cost_matrix[v][w]<dist[w])<br/>
{<br/>
dist[w]=min+cost_matrix[v][w];<br/>
last[w]=v;<br/>
}<br/>
}}<br/>
for(i=0;i<count;i++)<br/>
{<br/>
printf("\n%d==>%d:Path taken:%d",src_router,i,i);<br/>
w=i;<br/>
while(w!=src_router)<br/>
{<br/>
printf("\n<--%d",last[w]);w=last[w];<br/>
}<br/>
printf("\n Shortest path cost:%d",dist[i]);<br/>
}<br/>
}<br/>
 
      </code>
       `,
    },
    {
      title: "Distance Vector Routing",
      content: `<p>C Program</p>
        <code>
        /*<br/>
Distance Vector Routing in this program is implemented using Bellman Ford Algorithm:-<br/>
*/<br/>
#include<stdio.h><br/>
struct node<br/>
{<br/>
    unsigned dist[20];<br/>
    unsigned from[20];<br/>
}rt[10];<br/>
int main()<br/>
{<br/>
    int costmat[20][20];<br/>
    int nodes,i,j,k,count=0;<br/>
    printf("\nEnter the number of nodes : ");<br/>
    scanf("%d",&nodes);//Enter the nodes<br/>
    printf("\nEnter the cost matrix :\n");<br/>
    for(i=0;i<nodes;i++)<br/>
    {<br/>
        for(j=0;j<nodes;j++)<br/>
        {<br/>
            scanf("%d",&costmat[i][j]);<br/>
            costmat[i][i]=0;<br/>
            rt[i].dist[j]=costmat[i][j];//initialise the distance equal to cost matrix<br/>
            rt[i].from[j]=j;<br/>
        }<br/>
    }<br/>
        do<br/>
        {<br/>
            count=0;<br/>
            for(i=0;i<nodes;i++)//We choose arbitary vertex k and we calculate the direct distance from the node i to k using the cost matrix<br/>
            //and add the distance from k to node j<br/>
            for(j=0;j<nodes;j++)<br/>
            for(k=0;k<nodes;k++)<br/>
                if(rt[i].dist[j]>costmat[i][k]+rt[k].dist[j])<br/>
                {//We calculate the minimum distance<br/>
                    rt[i].dist[j]=rt[i].dist[k]+rt[k].dist[j];<br/>
                    rt[i].from[j]=k;<br/>
                    count++;<br/>
                }<br/>
        }while(count!=0);<br/>
        for(i=0;i<nodes;i++)<br/>
        {<br/>
            printf("\n\n For router %d\n",i+1);<br/>
            for(j=0;j<nodes;j++)<br/>
            {<br/>
                printf("\t\nnode %d via %d Distance %d ",j+1,rt[i].from[j]+1,rt[i].dist[j]);<br/>
            }<br/>
        }<br/>
    printf("\n\n");<br/>
    getch();<br/>
}
        </code>
      `,
    },
  ],
};

const styles = {
  bgColor: "white",
  titleTextColor: "black",
  rowTitleColor: "black",
  rowContentColor: "black",
  // arrowColor: "red",
};

const config = {
  animate: true,
  // arrowIcon: "V",
  tabFocus: true,
};

function App() {
  return (
    <div className="App">
      <div className="header">
        <ul>
          <li>CN</li>
          <li>OS</li>
          <li>DBMS</li>
          <li>OOSD</li>
        </ul>
      </div>
      <div className="info">
        <span>
          This is a website in which you can get all the codes of MCA (all sems)
          lab for reference purposes only, do not copy paste and if you copy
          paste change the variable name, modify the output otherwise everyone
          will have the same code.😊
        </span>
      </div>
      <Faq data={data} styles={styles} config={config} />
      <footer>
        Made with ❤ by Laxman <br />
      </footer>
    </div>
  );
}

export default App;
