import { Device } from "@/types/device";
import { DeviceStatusBadge } from "./DeviceStatusBadge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreHorizontal, Edit, Trash2 } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface DeviceTableProps {
  devices: Device[];
  onEdit: (device: Device) => void;
  onDelete: (device: Device) => void;
}

export const DeviceTable = ({ devices, onEdit, onDelete }: DeviceTableProps) => {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getDeviceTypeColor = (type: string) => {
    const colors = {
      laptop: "bg-blue-100 text-blue-800",
      desktop: "bg-green-100 text-green-800",
      server: "bg-purple-100 text-purple-800",
      router: "bg-orange-100 text-orange-800",
      switch: "bg-yellow-100 text-yellow-800",
      printer: "bg-pink-100 text-pink-800",
      tablet: "bg-indigo-100 text-indigo-800",
      phone: "bg-teal-100 text-teal-800",
      camera: "bg-red-100 text-red-800",
      other: "bg-gray-100 text-gray-800"
    };
    return colors[type as keyof typeof colors] || colors.other;
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Device Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>IP Address</TableHead>
            <TableHead>Last Seen</TableHead>
            <TableHead className="w-[70px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {devices.map((device) => (
            <TableRow key={device.id}>
              <TableCell className="font-medium">{device.name}</TableCell>
              <TableCell>
                <Badge variant="secondary" className={getDeviceTypeColor(device.type)}>
                  {device.type}
                </Badge>
              </TableCell>
              <TableCell>
                <DeviceStatusBadge status={device.status} />
              </TableCell>
              <TableCell>{device.location}</TableCell>
              <TableCell className="font-mono text-sm">{device.ipAddress}</TableCell>
              <TableCell className="text-sm text-muted-foreground">
                {formatDate(device.lastSeen)}
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => onEdit(device)}>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => onDelete(device)}
                      className="text-destructive"
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};