"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { formatPrice } from "@/lib/utils";

export default function AccountPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/");
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user) {
      const fetchOrders = async () => {
        try {
          const q = query(
            collection(db, "orders"),
            where("userId", "==", user.uid)
          );
          const snapshot = await getDocs(q);
          const ordersData = snapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as any) }));
          // sort locally by createdAt desc
          ordersData.sort((a: any, b: any) => {
            if (!a.createdAt || !b.createdAt) return 0;
            return b.createdAt.toMillis() - a.createdAt.toMillis();
          });
          setOrders(ordersData);
        } catch (error) {
          console.error("Error fetching orders:", error);
        }
      };
      fetchOrders();
    }
  }, [user]);

  if (loading || !user) return (
    <div className="bg-[#eff0f5] min-h-[calc(100vh-140px)] py-10 flex justify-center">
      <p className="text-gray-500">Loading...</p>
    </div>
  );

  return (
    <div className="bg-[#eff0f5] min-h-[calc(100vh-140px)] py-10">
      <div className="max-w-content mx-auto px-4 flex flex-col md:flex-row gap-6">
        
        <aside className="w-full md:w-64 shrink-0">
          <div className="mb-6">
            <h3 className="text-[13px] text-gray-500 mb-2">Hello, {user.displayName || "User"}</h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/account" className="text-brand font-medium block">Manage My Account</Link>
              </li>
              <li className="pl-4">
                <Link href="#" className="text-gray-500 hover:text-brand">My Profile</Link>
              </li>
              <li className="pl-4">
                <Link href="#" className="text-gray-500 hover:text-brand">Address Book</Link>
              </li>
              <li className="pl-4">
                <Link href="#" className="text-gray-500 hover:text-brand">My Payment Options</Link>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-[13px] text-gray-500 mb-2">My Orders</h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="#" className="text-gray-500 hover:text-brand block">My Returns</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-brand block">My Cancellations</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[13px] text-gray-500 mb-2">My Reviews</h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="#" className="text-gray-500 hover:text-brand block">Reviewed</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-brand block">To Be Reviewed</Link>
              </li>
            </ul>
          </div>
        </aside>

        <main className="flex-1">
          <h1 className="text-xl font-medium text-[#424242] mb-4">Manage My Account</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white p-5 shadow-sm rounded-sm">
              <div className="flex justify-between mb-2 text-sm">
                <span className="text-[#424242] font-medium">Personal Profile</span>
                <Link href="#" className="text-brand">EDIT</Link>
              </div>
              <div className="text-sm text-[#424242] space-y-1">
                <p>{user.displayName || "User"}</p>
                <p>{user.email}</p>
              </div>
            </div>

            <div className="bg-white p-5 shadow-sm rounded-sm">
              <div className="flex justify-between mb-2 text-sm">
                <span className="text-[#424242] font-medium">Address Book</span>
                <Link href="#" className="text-brand">EDIT</Link>
              </div>
              <div className="text-sm text-gray-500">
                <p className="mb-2">DEFAULT DELIVERY ADDRESS</p>
                <p>No default shipping address available.</p>
              </div>
            </div>
            
            <div className="bg-white p-5 shadow-sm rounded-sm">
              <div className="flex justify-between mb-2 text-sm">
                <span className="text-[#424242] font-medium">Billing Address</span>
                <Link href="#" className="text-brand">EDIT</Link>
              </div>
              <div className="text-sm text-gray-500">
                <p className="mb-2">DEFAULT BILLING ADDRESS</p>
                <p>No default billing address available.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 shadow-sm rounded-sm mb-4 flex items-center justify-between">
            <h2 className="text-[#424242] font-medium">Recent Orders</h2>
            <Link href="#" className="text-brand text-sm">View All</Link>
          </div>

          <div className="space-y-4">
            {orders.length === 0 ? (
              <div className="bg-white p-5 shadow-sm rounded-sm text-center py-8 text-gray-500 text-sm">
                You have no recent orders.
              </div>
            ) : (
              orders.slice(0, 3).map((order) => (
                <div key={order.id} className="bg-white p-5 shadow-sm rounded-sm">
                  <div className="flex justify-between items-center mb-3 pb-3 border-b border-gray-100">
                    <div className="text-sm">
                      <span className="text-gray-500 mr-2">Order ID:</span>
                      <span className="font-medium text-[#424242] uppercase">{order.id.slice(0, 8)}</span>
                    </div>
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[12px] font-medium rounded-sm uppercase tracking-wider">
                      {order.status}
                    </span>
                  </div>
                  
                  <div className="flex flex-col md:flex-row justify-between">
                    <div className="space-y-3 flex-1 mb-4 md:mb-0">
                      {order.items.map((item: any, index: number) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="relative w-12 h-12 shrink-0 border rounded overflow-hidden">
                            <Image src={item.image} alt={item.title} fill className="object-cover" unoptimized />
                          </div>
                          <div>
                            <p className="text-[13px] text-[#424242] line-clamp-1">{item.title}</p>
                            <p className="text-[12px] text-gray-500">Qty: {item.quantity}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="md:text-right border-t md:border-t-0 pt-3 md:pt-0">
                      <p className="text-[13px] text-gray-500 mb-1">Total Amount</p>
                      <p className="font-medium text-[#f57224]">{formatPrice(order.grandTotal)}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          
          <div className="mt-8 flex justify-end">
            <button
              onClick={async () => {
                await logout();
                router.push("/");
              }}
              className="px-6 py-2 bg-[#f57224] text-white font-medium rounded-sm text-sm hover:bg-[#d0611e] transition-colors uppercase tracking-wider"
            >
              Log Out
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
