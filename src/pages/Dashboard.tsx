import { useState, useMemo } from "react";
import { Device, DeviceStats } from "@/types/device";
import { mockDevices } from "@/data/mockDevices";
import { DeviceStatsCard } from "@/components/DeviceStatsCard";
import { DeviceTable } from "@/components/DeviceTable";
import { AddDeviceDialog } from "@/components/AddDeviceDialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Monitor, 
  Wifi, 
  AlertTriangle, 
  Settings, 
  Search, 
  Filter 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [devices, setDevices] = useState<Device[]>(mockDevices);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const { toast } = useToast();

  // Calculate device statistics
  const stats: DeviceStats = useMemo(() => {
    return devices.reduce(
      (acc, device) => {
        acc.total++;
        acc[device.status]++;
        return acc;
      },
      { total: 0, online: 0, offline: 0, maintenance: 0, error: 0 }
    );
  }, [devices]);

  // Filter devices based on search and filters
  const filteredDevices = useMemo(() => {
    return devices.filter((device) => {
      const matchesSearch = device.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          device.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          device.ipAddress.includes(searchTerm);
      
      const matchesStatus = statusFilter === "all" || device.status === statusFilter;
      const matchesType = typeFilter === "all" || device.type === typeFilter;
      
      return matchesSearch && matchesStatus && matchesType;
    });
  }, [devices, searchTerm, statusFilter, typeFilter]);

  const handleAddDevice = (newDeviceData: Omit<Device, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newDevice: Device = {
      ...newDeviceData,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    setDevices([...devices, newDevice]);
    toast({
      title: "Device Added",
      description: `${newDevice.name} has been added successfully.`,
    });
  };

  const handleEditDevice = (device: Device) => {
    toast({
      title: "Edit Device",
      description: `Edit functionality for ${device.name} coming soon!`,
    });
  };

  const handleDeleteDevice = (device: Device) => {
    setDevices(devices.filter(d => d.id !== device.id));
    toast({
      title: "Device Deleted",
      description: `${device.name} has been removed from the system.`,
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Device Management</h1>
            <p className="text-muted-foreground">
              Monitor and manage your organization's devices
            </p>
          </div>
          <AddDeviceDialog onAddDevice={handleAddDevice} />
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <DeviceStatsCard
            title="Total Devices"
            value={stats.total}
            icon={Monitor}
          />
          <DeviceStatsCard
            title="Online"
            value={stats.online}
            icon={Wifi}
            className="border-l-4 border-l-success"
          />
          <DeviceStatsCard
            title="Offline"
            value={stats.offline}
            icon={Monitor}
            className="border-l-4 border-l-muted"
          />
          <DeviceStatsCard
            title="Maintenance"
            value={stats.maintenance}
            icon={Settings}
            className="border-l-4 border-l-warning"
          />
          <DeviceStatsCard
            title="Error"
            value={stats.error}
            icon={AlertTriangle}
            className="border-l-4 border-l-destructive"
          />
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search devices by name, location, or IP..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[130px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="online">Online</SelectItem>
                <SelectItem value="offline">Offline</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
                <SelectItem value="error">Error</SelectItem>
              </SelectContent>
            </Select>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="laptop">Laptop</SelectItem>
                <SelectItem value="desktop">Desktop</SelectItem>
                <SelectItem value="server">Server</SelectItem>
                <SelectItem value="router">Router</SelectItem>
                <SelectItem value="switch">Switch</SelectItem>
                <SelectItem value="printer">Printer</SelectItem>
                <SelectItem value="tablet">Tablet</SelectItem>
                <SelectItem value="phone">Phone</SelectItem>
                <SelectItem value="camera">Camera</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Device Table */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              Devices ({filteredDevices.length})
            </h2>
          </div>
          <DeviceTable 
            devices={filteredDevices}
            onEdit={handleEditDevice}
            onDelete={handleDeleteDevice}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;